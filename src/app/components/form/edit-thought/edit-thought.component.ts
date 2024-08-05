import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss']
})
export class EditThoughtComponent implements OnInit {
  thought!: FormGroup

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = this.formBuilder.group({
        id: [thought.id],
        conteudo: [thought.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [thought.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [thought.modelo],
        liked: [thought.liked]
      })
    })
  }

  editThought() {
    if (!this.thought?.value.id) {
      return
    }

    this.service.edit(this.thought.value).subscribe(() => {
      this.router.navigate(['/list-thought'])
    })
  }

  cancel() {
    this.router.navigate(['/list-thought'])
  }
}

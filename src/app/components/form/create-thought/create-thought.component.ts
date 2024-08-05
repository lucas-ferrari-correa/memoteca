import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ])
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
        ])
      ],
      modelo: ['modelo1'],
      liked: [false]
    })
  }

  createThought() {
    console.log(this.form.valid)
    if (!this.form.valid) {
      return
    }

    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/list-thought'])
    })
  }

  cancel() {
    this.router.navigate(['/list-thought'])
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}

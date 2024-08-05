import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclude-thought',
  templateUrl: './exclude-thought.component.html',
  styleUrls: ['./exclude-thought.component.scss']
})
export class ExcludeThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    liked: false,
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought
    })
  }

  excludeThought() {
    if (!this.thought?.id) {
      return
    }

    this.service.exclude(this.thought.id).subscribe(() => {
      this.router.navigate(['/list-thought'])
    })
  }

  cancel() {
    this.router.navigate(['/list-thought'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) {

  }

  ngOnInit(): void {}

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/list-thought'])
    })
  }

  cancel() {
    this.router.navigate(['/list-thought'])
  }
}

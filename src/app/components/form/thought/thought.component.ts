import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss']
})
export class ThoughtComponent implements OnInit {
  @Input() thought = {
    conteudo: 'I love Angular',
    autoria: 'Lucas',
    modelo: 'modelo3'
  }

  constructor() {}

  ngOnInit(): void {

  }

  thoughtWidth(): string {
    if (this.thought.conteudo.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }
}

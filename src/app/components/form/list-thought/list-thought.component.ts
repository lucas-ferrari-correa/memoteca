import { Component, OnInit } from '@angular/core';

export interface IThought {
  conteudo: string;
  autoria: string;
  modelo: string;
}

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.scss']
})
export class ListThoughtComponent implements OnInit {
  listThoughts: IThought[] = [
    {
      conteudo: 'I love Angular',
      autoria: 'Lucas',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Lucas',
      modelo: 'modelo1'
    },
    {
      conteudo: 'I love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love Angular',
      autoria: 'Lucas',
      modelo: 'modelo3'
    }
  ];

  constructor() {}

  ngOnInit(): void {

  }
}

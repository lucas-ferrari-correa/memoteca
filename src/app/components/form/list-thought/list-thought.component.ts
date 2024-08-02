import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.scss']
})
export class ListThoughtComponent implements OnInit {
  listThoughts: Thought[] = [
    {
      id: 1,
      conteudo: 'I love Angular',
      autoria: 'Lucas',
      modelo: 'modelo3'
    },
    {
      id: 2,
      conteudo: 'I love Angular',
      autoria: 'Lucas',
      modelo: 'modelo1'
    },
    {
      id: 3,
      conteudo: 'I love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love AngularI love Angular',
      autoria: 'Lucas',
      modelo: 'modelo3'
    }
  ];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list().subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }
}

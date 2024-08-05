import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss']
})
export class ThoughtComponent implements OnInit {
  @Input() thought: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    liked: false
  }

  @Input() listByLiked: Thought[] = []

  constructor(
    private service: ThoughtService
  ) {}

  ngOnInit(): void {

  }

  thoughtWidth(): string {
    if (this.thought.conteudo.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

  changeLikedIcon(): string {
    if (!this.thought.liked) {
      return 'inativo'
    }

    return 'ativo'
  }

  updateLiked() {
    this.service.changeLiked(this.thought).subscribe(() => {
      this.listByLiked.splice(this.listByLiked.indexOf(this.thought), 1)
    });
  }
}

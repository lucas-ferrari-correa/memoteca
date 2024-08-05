import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.scss']
})
export class ListThoughtComponent implements OnInit {
  listThoughts: Thought[] = [];
  page: number = 1;
  hasMoreThought: boolean = true
  filter: string = ''
  onLiked = false
  listByLiked: Thought[] = []

  constructor(
    private service: ThoughtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.list(this.page, this.filter, this.onLiked).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  loadMoreThought() {
    this.service.list(++this.page, this.filter, this.onLiked)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts)

        if (!listThoughts.length) {
          this.hasMoreThought = false
        }
      })
  }

  searchThought() {
    this.hasMoreThought = true;
    this.page = 1;

    this.service.list(this.page, this.filter, this.onLiked)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts
      })
  }

  changeToLiked() {
    this.hasMoreThought = true;
    this.page = 1;
    this.onLiked = true

    this.service.list(this.page, this.filter, this.onLiked)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts
        this.listByLiked = listThoughts
      })
  }

  changeToNormal() {
    this.hasMoreThought = true;
    this.page = 1;
    this.onLiked = false

    this.router.navigate([this.router.url])
  }
}

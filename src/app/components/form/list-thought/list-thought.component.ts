import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

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

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list(this.page, this.filter).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  loadMoreThought() {
    this.service.list(++this.page, this.filter)
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

    this.service.list(this.page, this.filter)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts
      })
  }
}

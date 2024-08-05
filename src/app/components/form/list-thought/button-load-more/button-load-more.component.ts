import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-load-more',
  templateUrl: './button-load-more.component.html',
  styleUrls: ['./button-load-more.component.scss']
})
export class ButtonLoadMoreComponent implements OnInit {
  @Input()
  hasMoreThought: boolean = false

  constructor() {}

  ngOnInit(): void {

  }
}

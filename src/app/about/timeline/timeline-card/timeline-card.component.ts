import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {

  // @Input() timeline_data_array:any;
  @Input() timeline_data:any;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit {

  @Input() src: any;
  @Input() isImage=true;
  @Input() index:any;

  @Output() currentMediaIndexEmitter=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

   openViewer(event:any,id:any){
    // console.log(event)
    console.log("inside openViewer of media-card, clicked : "+id)

    //open popup viewer for clicked id
    // console.log("event emitt start")
    this.currentMediaIndexEmitter.emit(id);
    //::::: ENHANCEMENT :::: we can emit the src instead of id
    // console.log("event emitt end")
  }
}

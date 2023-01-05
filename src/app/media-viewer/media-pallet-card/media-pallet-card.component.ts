import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-media-pallet-card',
  templateUrl: './media-pallet-card.component.html',
  styleUrls: ['./media-pallet-card.component.css']
})
export class MediaPalletCardComponent implements OnInit {

  @Input() src: any;
  @Input() isImage=true;
  @Input() index:any;
  @Input() activeMediaIndex=0;

  @Output() currentMediaIndexEmitter=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  openViewer(event:any,id:any){
    console.log("inside openViewer of media-card, clicked : "+id)
    this.currentMediaIndexEmitter.emit(id);
  }
}

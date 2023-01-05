import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NavBarServiceService } from 'src/app/nav-bar-service.service';

@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.css']
})
export class MediaViewerComponent implements OnInit,OnChanges,OnDestroy {

  @Input() mediaData=[{url:'',isImage:true}]
  @Input() currentMediaIndex:any // will be used when MediaViewerComponent data is changed from outside

  @Output() closeEmitter=new EventEmitter<any>();

  src=''
  index=-1
  activeMediaIndex=0;
  isImage=true;

  helpText='KeyBoard Shortcuts : \nPress > for next, \nPress < for previous, \nPress Esc to Exit Viewer'

  constructor(private navbarService: NavBarServiceService) {
    // this.navbarService.isShowNavBar = false
   }
  ngOnDestroy(): void {
    // this.navbarService.isShowNavBar = true
  }
  // willl be used when MediaViewerComponent data is changed from outside
  ngOnChanges(changes: SimpleChanges): void {
    // this.navbarService.isShowNavBar = false
    this.ngOnChangesCustom()
  }
  ngOnInit(): void {
    // this.navbarService.isShowNavBar = false

    console.log("mediaData.mediaData :")
    console.log(this.mediaData)
    console.log("mediaData.currentMediaIndex :")
    console.log(this.currentMediaIndex)

    this.ngOnChangesCustom();
    // this.mediaData.forEach((element,index) => {
    //   if(index==this.currentMediaIndex) {
    //     this.src=element.url;
    //     this.index=index;
    //     this.activeMediaIndex=index;
    //   }
    // });
  }

  handleKeyEventForMediaViewer(event:any){
    // let ev = event ? event : window.event;

    let ev = event || window.event;
    console.log("ev.keyCode : "+ev.keyCode)
    if(ev.keyCode=='37'){ // <
      this.nextOrPrevious(-1);
    }
    else if(ev.keyCode=='39'){ // >
      this.nextOrPrevious(1);
    }
    else if(ev.keyCode=='27'){ // Esc
      this.onClose();
    }
    /*else if(ev.keyCode=='38'){ // up
      this.zoomImage(-1);
    }
    else if(ev.keyCode=='40'){ // down
      this.zoomImage(1);
    }*/
    //video play,pause,forward,backward can be controller from here
    //for forward, backward we need to check isImage key in mediaData to diff betweeen image
  }
  zoomImage(zoomFactor:number){
  }
  nextOrPrevious(counter:number){

    let updatedIndex=this.currentMediaIndex+counter
    // if reached at corer then stop
    // updatedIndex=updatedIndex<0?0:updatedIndex;
    // updatedIndex=updatedIndex>=this.mediaData.length?this.mediaData.length:updatedIndex;

    // if reached at corner then cycle behaviour
    // updatedIndex=updatedIndex<0?this.mediaData.length:updatedIndex;
    // updatedIndex=updatedIndex>=this.mediaData.length?0:updatedIndex;
    if(updatedIndex<0){
      updatedIndex=this.mediaData.length-1;
    }
    else if(updatedIndex>=this.mediaData.length){
      updatedIndex=0;
    }

    

    //caluted scroll ratio
    this.activeMediaIndex=updatedIndex;
    console.log("activeMediaIndex"+this.activeMediaIndex)
    this.updateCurrentMediaClickedIndex(updatedIndex);
  }
  updateCurrentMediaClickedIndex(emittedCurrentMediaIndex:any){
        this.currentMediaIndex=emittedCurrentMediaIndex;
        // this.isMediaViewerOpen=true
        this.ngOnChangesCustom();
  }

  ngOnChangesCustom(): void {
    this.mediaData.forEach((element,index) => {
      if(index==this.currentMediaIndex) {
        this.src=element.url;
        this.index=index;
        this.activeMediaIndex=index;
        this.isImage=element.isImage;
      }
    });

    // console.log(this.src)
    // console.log(this.index)
  }
  
  onClose(){
    this.closeEmitter.emit(true);

    //restore z-index of navbar
  }

  mediaViewerHelp(){

  }
}

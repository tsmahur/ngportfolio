import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-media-pallet',
  templateUrl: './media-pallet.component.html',
  styleUrls: ['./media-pallet.component.css']
})
export class MediaPalletComponent implements OnInit,OnChanges,AfterViewInit {

  @Output() currentMediaIndexEmitter=new EventEmitter<any>();
  @Input() mediaData=[{url:'',isImage:true}]
  @Input() activeMediaIndex=0
  
  scrollPos=1;
  constructor() { }
  ngAfterViewInit(): void {
    console.log('fixing scroll after view load')
    this.scrollPalletToActiveMediaIndex(this.activeMediaIndex)
  }

  ngOnInit(): void {
    this.scrollPalletToActiveMediaIndex(this.activeMediaIndex)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.scrollPalletToActiveMediaIndex(this.activeMediaIndex)
  }

  updateCurrentMediaClickedIndex(emittedCurrentMediaIndex:any){
    this.currentMediaIndexEmitter.emit(emittedCurrentMediaIndex)
  }
  scrollPalletToActiveMediaIndex(activeMediaIndex:number){
    console.log("-----------------scrolll starrt----------------------------------------- ")
    console.log("scrollPalletToActiveMediaIndex : activeMediaIndex : "+activeMediaIndex)
    var palletHtmlElement=document.getElementById('pallet-id');
    if(palletHtmlElement){
      // debugger
      var palletHtmlElementCurrentScrollPos = palletHtmlElement.scrollLeft 
                          // || document.documentElement.scrollTop; // in chrome 0 || someVal => someVal
      var distanceToScroll = palletHtmlElement.scrollLeft - palletHtmlElement.scrollWidth;
      var scrolledPercent = (palletHtmlElementCurrentScrollPos / distanceToScroll) * 100;
      var documentBodyScrollWidth =document.body.scrollWidth;
      var documentBodyScrollWidthCenter = documentBodyScrollWidth/2;
      var lengthOfOnePalletCard=palletHtmlElement.scrollWidth/this.mediaData.length;
      var centerCorrectionFactorLevel1=documentBodyScrollWidthCenter/lengthOfOnePalletCard;
      var centerCorrectionFactorLevel2Offset=centerCorrectionFactorLevel1-lengthOfOnePalletCard/2;
      var centerCorrectionFactorLevel2=(documentBodyScrollWidthCenter+centerCorrectionFactorLevel2Offset)/lengthOfOnePalletCard;
      console.log("centerCorrectionFactorLevel1 : "+centerCorrectionFactorLevel1)
      console.log("centerCorrectionFactorLevel2 : "+centerCorrectionFactorLevel2)
      
      if(centerCorrectionFactorLevel2<activeMediaIndex) {
      // if(centerCorrectionFactorLevel1<activeMediaIndex) {
        var correctedScrollPosLevel1Corrected=lengthOfOnePalletCard * (activeMediaIndex-centerCorrectionFactorLevel1);
        var correctedScrollPosLevel2Corrected=lengthOfOnePalletCard * (activeMediaIndex-centerCorrectionFactorLevel2);
        console.log("centerCorrectionFactorLevel1<activeMediaIndex, correctedScrollPosLevel1Corrected : "+correctedScrollPosLevel1Corrected)
        console.log("centerCorrectionFactorLevel1<activeMediaIndex, correctedScrollPosLevel2Corrected : "+correctedScrollPosLevel2Corrected)
        this.scrollPos=correctedScrollPosLevel2Corrected;
        // this.scrollPos=correctedScrollPosLevel1Corrected;
      }else{
        this.scrollPos=0;
      }
      console.log("scrollPalletToActiveMediaIndex : this.scrollPos : "+this.scrollPos)
    }
    console.log("-----------------scrolll end----------------------------------------- ")

  }
}

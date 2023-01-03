import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.css']
})
export class ScrollProgressComponent implements OnInit {

  @Input() isGoToTopButtonEnabled=false;
  showGoToTopBasedOnPosition=false;
  scrollProgressBarWidth="0";
  constructor() { }

  ngOnInit(): void {
  }
  onScrollProgresssBarUpdate(ev: any) {
    var windowCurrentScrollPos = document.body.scrollTop || document.documentElement.scrollTop; // in chrome 0 || someVal => someVal
    var heightToScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolledPercent = (windowCurrentScrollPos / heightToScroll) * 100;
    // this.document.getElementById("scrollProgressBar").style.width = scrolledPercent + "%";
    this.scrollProgressBarWidth=scrolledPercent+ "%";
 
    //show/hide scroll button after certain percentange
    if(this.isGoToTopButtonEnabled){
      this.showHideTopButtonBasedOnCurrentPositon(windowCurrentScrollPos);
    }

 }
 showHideTopButtonBasedOnCurrentPositon(windowCurrentScrollPos: any) {
  
  if (windowCurrentScrollPos < 1000) {
    //  this.document.getElementById("top-id").style.display = "none"; 
    this.showGoToTopBasedOnPosition=false
  }
  else if (windowCurrentScrollPos > 1000) {
    //  this.document.getElementById("top-id").style.display = "inline";
    this.showGoToTopBasedOnPosition=true
  }
}
/*
  window.onscroll = function() {
    this.onScrollProgresssBarUpdate();
    // onScrollStickyNavBarDisableOnHamBurgerClick();
 };
//  onScrollStickyNavBarDisableOnHamBurgerClick() { //not using as of now
//     nav=this.document.querySelector('nav');
//     // nav.classList.toggle('stickyNavbar',false);
//     nav.classList.remove('stickyNavbar');
//  }
*/

}

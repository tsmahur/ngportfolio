import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-go-to-top-button',
  templateUrl: './go-to-top-button.component.html',
  styleUrls: ['./go-to-top-button.component.css']
})
export class GoToTopButtonComponent implements OnInit {

  @Input() showGoToTopBasedOnPosition=false
  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  // }
  
  ngOnInit(): void {
  }

  scrollToTop(event: any){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

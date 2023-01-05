import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // assets='./assets/' //for deployment
    // assets='../../../assets/' //for local
    // ---data is dummy here, it will be overridden by ngOnInit()
  assets=environment.assets;
  src=this.assets+"images/trishankSinghMahur.jpg"

}

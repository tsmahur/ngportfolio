import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarServiceService {

  // navbarVisibilityTrigger= new Subject();

  constructor() { }
  
  // getNavbarVisibilityTrigger(){
    // return this.navbarVisibilityTrigger.asObservable();
  // }
  isShowNavBar=true;
  getIsShowNavNar(){return this.isShowNavBar}
}

import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavBarServiceService } from './nav-bar-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'ngportfolio';
  // isShowNavBar=true;
  // isShowNavBar=this.navbarService.isShowNavBar;

  // handleNavbarVisibility(isShow:any){
  //   console.log("handleNavbarVisibility isShow:"+isShow)
  //   this.isShowNavBar=isShow
  // }

  // navBarSubscription:Subscription=new Subscription();
  constructor(private navbarService:NavBarServiceService) { }
  ngOnInit(): void {
    // this.navBarSubscription=this.navbarService.getNavbarVisibilityTrigger().subscribe(()=> !this.isShowNavBar);
  }
  ngOnDestroy(): void {
    // this.navBarSubscription.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.navbarService.isShowNavBar = false
    // this.ngOnChangesCustom()
    this.getIsShowNavNar();
  }
  getIsShowNavNar(){
    console.log("AppComponent::this.navbarService.getIsShowNavNar()")
    console.log(this.navbarService.getIsShowNavNar())
    return this.navbarService.getIsShowNavNar()
  }
}

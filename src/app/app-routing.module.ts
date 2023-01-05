import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TravelHomeComponent } from './travel/travel-home/travel-home.component';

const routes: Routes = [
  // {path:'gallery', loadChildren:''},
  // {path:'', component:TravelHomeComponent}, //for testing do not commit this
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'travel', component:TravelHomeComponent},
  {path:'**', redirectTo:'/home',pathMatch:'full'} //for non routed url 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

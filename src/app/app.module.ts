import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './about/skills/skills.component';
import { TimelineComponent } from './about/timeline/timeline.component';
import { AboutMeIntroComponent } from './about/about-me-intro/about-me-intro.component';
import { AboutMeCardComponent } from './about/about-me-intro/about-me-card/about-me-card.component';
import { SkillCardComponent } from './about/skills/skill-card/skill-card.component';
import { TimelineCardComponent } from './about/timeline/timeline-card/timeline-card.component';
import { ScrollProgressComponent } from './scroll-progress/scroll-progress.component';
import { GoToTopButtonComponent } from './scroll-progress/go-to-top-button/go-to-top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    TimelineComponent,
    AboutMeIntroComponent,
    AboutMeCardComponent,
    SkillCardComponent,
    TimelineCardComponent,
    ScrollProgressComponent,
    GoToTopButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

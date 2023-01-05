import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelHomeComponent } from './travel-home/travel-home.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MediaViewerModule } from '../media-viewer/media-viewer.module';



@NgModule({
  declarations: [TravelHomeComponent, MediaCardComponent],
  imports: [
    CommonModule,
    MediaViewerModule
  ]
})
export class TravelModule { }

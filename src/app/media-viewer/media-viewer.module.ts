import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaViewerComponent } from './media-viewer.component';
import { MediaPalletComponent } from './media-pallet/media-pallet.component';
import { MediaPalletCardComponent } from './media-pallet-card/media-pallet-card.component';



@NgModule({
  declarations: [MediaViewerComponent, MediaPalletComponent, MediaPalletCardComponent],
  exports: [MediaViewerComponent], //component which we want to be available for other module which are going to inport this module
  imports: [
    CommonModule
  ]
})
export class MediaViewerModule { }

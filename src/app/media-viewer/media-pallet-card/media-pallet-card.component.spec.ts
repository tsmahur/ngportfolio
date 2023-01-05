import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPalletCardComponent } from './media-pallet-card.component';

describe('MediaPalletCardComponent', () => {
  let component: MediaPalletCardComponent;
  let fixture: ComponentFixture<MediaPalletCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPalletCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPalletCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

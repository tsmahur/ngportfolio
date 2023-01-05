import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPalletComponent } from './media-pallet.component';

describe('MediaPalletComponent', () => {
  let component: MediaPalletComponent;
  let fixture: ComponentFixture<MediaPalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

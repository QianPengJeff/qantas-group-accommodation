import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from 'protractor';

import { HotelCardItemComponent } from './hotel-card-item.component';

describe('HotelCardItemComponent', () => {
  let component: HotelCardItemComponent;
  let fixture: ComponentFixture<HotelCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should has class hotel-card-item', () => {
    const fixture = TestBed.createComponent(HotelCardItemComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container').classList).toContain('hotel-card-item');
  });
});

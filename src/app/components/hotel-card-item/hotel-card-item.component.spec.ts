import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelImageComponent } from '../hotel-image/hotel-image.component';
import Hotel from '../../../assets/data/test-mock-data.json';
import { HotelCardItemComponent } from './hotel-card-item.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { RatingComponent } from '../rating/rating.component';
import { PriceComponent } from '../price/price.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HotelCardItemComponent', () => {
  let component: HotelCardItemComponent;
  let fixture: ComponentFixture<HotelCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ 
        HotelCardItemComponent,
        HotelDetailsComponent,
        HotelImageComponent,
        PriceComponent,
        RatingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardItemComponent);
    component = fixture.componentInstance;
    component.hotel = Hotel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should has class hotel-card-item', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container').classList).toContain('hotel-card-item');
  });
});

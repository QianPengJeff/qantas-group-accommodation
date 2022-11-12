import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelImageComponent } from '../hotel-image/hotel-image.component';
import Hotel from '../../../assets/data/test-mock-data.json';
import { HotelCardItemComponent } from './hotel-card-item.component';

describe('HotelCardItemComponent', () => {
  let component: HotelCardItemComponent;
  let fixture: ComponentFixture<HotelCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HotelCardItemComponent,
        HotelImageComponent  
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

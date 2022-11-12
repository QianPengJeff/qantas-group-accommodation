import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Hotel from '../../../assets/data/test-mock-data.json';
import { HotelImageComponent } from './hotel-image.component';

describe('HotelImageComponent', () => {
  let component: HotelImageComponent;
  let fixture: ComponentFixture<HotelImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HotelImageComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelImageComponent);
    component = fixture.componentInstance;
    component.hotel = Hotel;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

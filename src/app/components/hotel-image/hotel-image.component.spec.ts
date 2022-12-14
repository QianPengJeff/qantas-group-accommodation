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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('image tag alt property value should equals to mock data', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').getAttribute('alt')).toEqual('Image of Primus Hotel Sydney');
  });
});

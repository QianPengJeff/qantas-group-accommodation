import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Hotel from '../../../assets/data/test-mock-data.json';
import { HotelDetailsComponent } from './hotel-details.component';

describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HotelDetailsComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    component.hotel = Hotel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when offer has free cancellation option should show free cancellation text', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.cancellation-option').textContent).toContain('Free cancellation');
  });
});

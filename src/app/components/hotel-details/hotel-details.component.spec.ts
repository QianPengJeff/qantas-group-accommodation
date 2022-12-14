import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Hotel from '../../../assets/data/test-mock-data.json';
import { RatingComponent } from '../rating/rating.component';
import { HotelDetailsComponent } from './hotel-details.component';

describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HotelDetailsComponent ,
        RatingComponent
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

  it('title text content should have as the hotel title value in mock data', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Primus Hotel Sydney');
  });

  it('when offer has free cancellation option should show free cancellation text', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.cancellation-option').textContent).toContain('Free cancellation');
  });
});

import { HotelImageComponent } from './components/hotel-image/hotel-image.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HotelCardItemComponent } from './components/hotel-card-item/hotel-card-item.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { RatingComponent } from './components/rating/rating.component';
import { PriceComponent } from './components/price/price.component';
import { SortPipe } from './infrastructure/pipes/sort.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HotelCardItemComponent,
        HotelDetailsComponent,
        HotelImageComponent,
        PriceComponent,
        RatingComponent,
        SortPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Qantas Group Accommodation'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Qantas Group Accommodation');
  });
});

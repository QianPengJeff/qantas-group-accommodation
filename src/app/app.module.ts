import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelCardItemComponent } from './components/hotel-card-item/hotel-card-item.component';
import { HotelImageComponent } from './components/hotel-image/hotel-image.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { RatingComponent } from './components/rating/rating.component';
import { PriceComponent } from './components/price/price.component';
import { SortPipe } from './infrastructure/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardItemComponent,
    HotelImageComponent,
    HotelDetailsComponent,
    RatingComponent,
    PriceComponent,
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SortPipe
  ]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

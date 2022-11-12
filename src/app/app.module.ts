import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelCardItemComponent } from './components/hotel-card-item/hotel-card-item.component';
import { HotelImageComponent } from './components/hotel-image/hotel-image.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardItemComponent,
    HotelImageComponent,
    HotelDetailsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

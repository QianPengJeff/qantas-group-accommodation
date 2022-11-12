import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelCardItemComponent } from './components/hotel-card-item/hotel-card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

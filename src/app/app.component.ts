import { Component } from '@angular/core';
import { IHotel } from './infrastructure/interfaces/ihotel';
import Hotels from '../assets/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Qantas Group Accommodation';
  hotels: IHotel[] = Hotels.results;
  sortDirection: string = 'desc';

  constructor(){
    console.log(this.hotels);
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
    console.log(this.sortDirection);
  }
}

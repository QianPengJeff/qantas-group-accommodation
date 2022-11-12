import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../../infrastructure/interfaces/ihotel';

@Component({
  selector: 'app-hotel-card-item',
  templateUrl: './hotel-card-item.component.html',
  styleUrls: ['./hotel-card-item.component.scss']
})
export class HotelCardItemComponent implements OnInit {
  @Input() hotel: IHotel;

  constructor() { }

  ngOnInit() {
    console.log(this.hotel);
  }

}

import { IHotel } from '../../infrastructure/interfaces/ihotel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  @Input() hotel: IHotel;
  isFreeCancellation: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.hotel.offer.cancellationOption.cancellationType == "FREE_CANCELLATION")
      this.isFreeCancellation = true;
  }
}

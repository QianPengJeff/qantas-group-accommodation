import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../../infrastructure/interfaces/ihotel';

@Component({
  selector: 'app-hotel-image',
  templateUrl: './hotel-image.component.html',
  styleUrls: ['./hotel-image.component.scss']
})
export class HotelImageComponent implements OnInit {
  @Input() hotel: IHotel;

  constructor() { }

  ngOnInit() {
  }

}

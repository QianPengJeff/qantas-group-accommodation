import { Component, OnInit, Input } from '@angular/core';
import { IResult } from 'src/app/infrastructure/interfaces/iresult';

@Component({
  selector: 'app-hotel-card-item',
  templateUrl: './hotel-card-item.component.html',
  styleUrls: ['./hotel-card-item.component.scss']
})
export class HotelCardItemComponent implements OnInit {
  @Input() hotel: IResult;

  constructor() { }

  ngOnInit() {
    console.log(this.hotel);
  }

}

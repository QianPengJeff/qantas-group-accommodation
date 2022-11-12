import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from '../../infrastructure/interfaces/ihotel';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @Input() public Offer: IOffer;

  constructor() { }

  ngOnInit() {
  }

}

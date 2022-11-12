import { Component, OnInit, Input } from '@angular/core';
import { IRating } from '../../infrastructure/interfaces/ihotel';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: IRating;
  hasHalfScore: boolean = false;
  ratingScore: number = 0;

  constructor() { 
  }

  ngOnInit() {
    this.checkHalfScore();
  }

  checkHalfScore() {
    this.hasHalfScore = !Number.isInteger(this.rating.ratingValue);
    this.ratingScore = this.rating.ratingValue;
    if(this.hasHalfScore){
      this.ratingScore = this.rating.ratingValue - 0.5; 
    }
  }
}

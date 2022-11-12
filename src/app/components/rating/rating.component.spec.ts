import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.rating = {
        "ratingValue": 4.5,
        "ratingType": "self"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('rating icon should be a circle icon if it is self rating', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('i').classList).toContain('fa-circle');
  });

  it('the last rating icon should be a half circle icon if it is half rating score', () => {
    const compiled = fixture.debugElement.nativeElement;
    var nodes = compiled.querySelectorAll('i');
    var lastElement = nodes[nodes.length- 1];
    expect(lastElement.classList).toContain('fa-circle-half-stroke');
  });

  it('rating icon should be a star icon if it is star rating', () => {
    component.rating = {
      "ratingValue": 4.5,
      "ratingType": "star"
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('i').classList).toContain('fa-star');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Hotel from '../../../assets/data/test-mock-data.json';
import { PriceComponent } from './price.component';


describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    component.Offer = Hotel.offer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('curreny in description should as same as it in mock data', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.description').textContent).toContain(component.Offer.displayPrice.currency);
  });

  it('display price should has a curreny symbol and has zero decimal', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.display-price').textContent).toContain('$375');
  });

  it('savings price should has a curreny symbol and has zero decimal', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.savings').textContent).toContain('$28');
  });
});

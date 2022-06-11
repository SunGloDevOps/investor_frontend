import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentdetailComponent } from './investmentdetail.component';

describe('InvestmentdetailComponent', () => {
  let component: InvestmentdetailComponent;
  let fixture: ComponentFixture<InvestmentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

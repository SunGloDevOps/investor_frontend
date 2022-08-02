import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositbankComponent } from './depositbank.component';

describe('DepositbankComponent', () => {
  let component: DepositbankComponent;
  let fixture: ComponentFixture<DepositbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

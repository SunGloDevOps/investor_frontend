import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestedamountComponent } from './investedamount.component';

describe('InvestedamountComponent', () => {
  let component: InvestedamountComponent;
  let fixture: ComponentFixture<InvestedamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestedamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestedamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

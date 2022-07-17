import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmodalComponent } from './investmodal.component';

describe('InvestmodalComponent', () => {
  let component: InvestmodalComponent;
  let fixture: ComponentFixture<InvestmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

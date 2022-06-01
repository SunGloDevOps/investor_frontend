import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingbankComponent } from './landingbank.component';

describe('LandingbankComponent', () => {
  let component: LandingbankComponent;
  let fixture: ComponentFixture<LandingbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

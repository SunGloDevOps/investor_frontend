import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingprotectComponent } from './landingprotect.component';

describe('LandingprotectComponent', () => {
  let component: LandingprotectComponent;
  let fixture: ComponentFixture<LandingprotectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingprotectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingprotectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

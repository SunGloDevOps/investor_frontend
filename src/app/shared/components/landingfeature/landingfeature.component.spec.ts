import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingfeatureComponent } from './landingfeature.component';

describe('LandingfeatureComponent', () => {
  let component: LandingfeatureComponent;
  let fixture: ComponentFixture<LandingfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

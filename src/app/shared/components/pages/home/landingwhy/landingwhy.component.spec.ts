import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingwhyComponent } from './landingwhy.component';

describe('LandingwhyComponent', () => {
  let component: LandingwhyComponent;
  let fixture: ComponentFixture<LandingwhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingwhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingwhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

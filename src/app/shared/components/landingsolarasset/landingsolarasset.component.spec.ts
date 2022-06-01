import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingsolarassetComponent } from './landingsolarasset.component';

describe('LandingsolarassetComponent', () => {
  let component: LandingsolarassetComponent;
  let fixture: ComponentFixture<LandingsolarassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingsolarassetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingsolarassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

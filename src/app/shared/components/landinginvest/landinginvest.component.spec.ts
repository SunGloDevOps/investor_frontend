import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinginvestComponent } from './landinginvest.component';

describe('LandinginvestComponent', () => {
  let component: LandinginvestComponent;
  let fixture: ComponentFixture<LandinginvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandinginvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandinginvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

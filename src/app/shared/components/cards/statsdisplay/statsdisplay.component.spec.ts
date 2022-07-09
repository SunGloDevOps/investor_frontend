import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsdisplayComponent } from './statsdisplay.component';

describe('StatsdisplayComponent', () => {
  let component: StatsdisplayComponent;
  let fixture: ComponentFixture<StatsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

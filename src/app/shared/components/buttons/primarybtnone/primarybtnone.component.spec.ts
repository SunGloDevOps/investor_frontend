import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarybtnoneComponent } from './primarybtnone.component';

describe('PrimarybtnoneComponent', () => {
  let component: PrimarybtnoneComponent;
  let fixture: ComponentFixture<PrimarybtnoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarybtnoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarybtnoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

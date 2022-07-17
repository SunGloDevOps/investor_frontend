import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarybtntwoComponent } from './primarybtntwo.component';

describe('PrimarybtntwoComponent', () => {
  let component: PrimarybtntwoComponent;
  let fixture: ComponentFixture<PrimarybtntwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarybtntwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarybtntwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedbtnoneComponent } from './borderedbtnone.component';

describe('BorderedbtnoneComponent', () => {
  let component: BorderedbtnoneComponent;
  let fixture: ComponentFixture<BorderedbtnoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedbtnoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedbtnoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

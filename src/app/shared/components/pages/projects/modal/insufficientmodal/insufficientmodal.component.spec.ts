import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsufficientmodalComponent } from './insufficientmodal.component';

describe('InsufficientmodalComponent', () => {
  let component: InsufficientmodalComponent;
  let fixture: ComponentFixture<InsufficientmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsufficientmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsufficientmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedcardComponent } from './borderedcard.component';

describe('BorderedcardComponent', () => {
  let component: BorderedcardComponent;
  let fixture: ComponentFixture<BorderedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderedcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

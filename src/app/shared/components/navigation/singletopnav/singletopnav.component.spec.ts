import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletopnavComponent } from './singletopnav.component';

describe('SingletopnavComponent', () => {
  let component: SingletopnavComponent;
  let fixture: ComponentFixture<SingletopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

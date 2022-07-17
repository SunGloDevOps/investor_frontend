import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarybtnoneComponent } from './secondarybtnone.component';

describe('SecondarybtnoneComponent', () => {
  let component: SecondarybtnoneComponent;
  let fixture: ComponentFixture<SecondarybtnoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarybtnoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarybtnoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

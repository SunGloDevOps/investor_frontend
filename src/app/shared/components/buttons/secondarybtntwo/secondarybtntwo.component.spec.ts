import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarybtntwoComponent } from './secondarybtntwo.component';

describe('SecondarybtntwoComponent', () => {
  let component: SecondarybtntwoComponent;
  let fixture: ComponentFixture<SecondarybtntwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarybtntwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarybtntwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

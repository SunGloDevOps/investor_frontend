import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarybtnthreeComponent } from './secondarybtnthree.component';

describe('SecondarybtnthreeComponent', () => {
  let component: SecondarybtnthreeComponent;
  let fixture: ComponentFixture<SecondarybtnthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarybtnthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarybtnthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletopnavComponent } from './mobiletopnav.component';

describe('MobiletopnavComponent', () => {
  let component: MobiletopnavComponent;
  let fixture: ComponentFixture<MobiletopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiletopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiletopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

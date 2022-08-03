import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareprojectComponent } from './shareproject.component';

describe('ShareprojectComponent', () => {
  let component: ShareprojectComponent;
  let fixture: ComponentFixture<ShareprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

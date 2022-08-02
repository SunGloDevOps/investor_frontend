import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifywithdrawalComponent } from './verifywithdrawal.component';

describe('VerifywithdrawalComponent', () => {
  let component: VerifywithdrawalComponent;
  let fixture: ComponentFixture<VerifywithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifywithdrawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifywithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

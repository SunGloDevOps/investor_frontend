import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationcardComponent } from './verificationcard.component';

describe('VerificationcardComponent', () => {
  let component: VerificationcardComponent;
  let fixture: ComponentFixture<VerificationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

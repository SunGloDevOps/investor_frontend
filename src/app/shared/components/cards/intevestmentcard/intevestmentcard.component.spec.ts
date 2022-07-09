import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntevestmentcardComponent } from './intevestmentcard.component';

describe('IntevestmentcardComponent', () => {
  let component: IntevestmentcardComponent;
  let fixture: ComponentFixture<IntevestmentcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntevestmentcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntevestmentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

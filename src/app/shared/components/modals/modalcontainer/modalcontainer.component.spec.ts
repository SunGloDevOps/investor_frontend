import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcontainerComponent } from './modalcontainer.component';

describe('ModalcontainerComponent', () => {
  let component: ModalcontainerComponent;
  let fixture: ComponentFixture<ModalcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

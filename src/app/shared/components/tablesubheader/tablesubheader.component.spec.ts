import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesubheaderComponent } from './tablesubheader.component';

describe('TablesubheaderComponent', () => {
  let component: TablesubheaderComponent;
  let fixture: ComponentFixture<TablesubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

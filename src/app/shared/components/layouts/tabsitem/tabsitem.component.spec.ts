import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsitemComponent } from './tabsitem.component';

describe('TabsitemComponent', () => {
  let component: TabsitemComponent;
  let fixture: ComponentFixture<TabsitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

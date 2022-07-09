import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectinfocardComponent } from './projectinfocard.component';

describe('ProjectinfocardComponent', () => {
  let component: ProjectinfocardComponent;
  let fixture: ComponentFixture<ProjectinfocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectinfocardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectinfocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

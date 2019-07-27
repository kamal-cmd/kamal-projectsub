import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsubmissionComponent } from './projectsubmission.component';

describe('ProjectsubmissionComponent', () => {
  let component: ProjectsubmissionComponent;
  let fixture: ComponentFixture<ProjectsubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

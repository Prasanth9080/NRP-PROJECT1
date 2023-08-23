import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReq2Component } from './project-req2.component';

describe('ProjectReq2Component', () => {
  let component: ProjectReq2Component;
  let fixture: ComponentFixture<ProjectReq2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectReq2Component]
    });
    fixture = TestBed.createComponent(ProjectReq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

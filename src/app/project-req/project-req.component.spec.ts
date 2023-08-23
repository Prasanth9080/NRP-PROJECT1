import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReqComponent } from './project-req.component';

describe('ProjectReqComponent', () => {
  let component: ProjectReqComponent;
  let fixture: ComponentFixture<ProjectReqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectReqComponent]
    });
    fixture = TestBed.createComponent(ProjectReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

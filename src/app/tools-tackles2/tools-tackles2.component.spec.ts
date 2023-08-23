import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTackles2Component } from './tools-tackles2.component';

describe('ToolsTackles2Component', () => {
  let component: ToolsTackles2Component;
  let fixture: ComponentFixture<ToolsTackles2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsTackles2Component]
    });
    fixture = TestBed.createComponent(ToolsTackles2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

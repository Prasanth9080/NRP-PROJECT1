import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTackles3Component } from './tools-tackles3.component';

describe('ToolsTackles3Component', () => {
  let component: ToolsTackles3Component;
  let fixture: ComponentFixture<ToolsTackles3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsTackles3Component]
    });
    fixture = TestBed.createComponent(ToolsTackles3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

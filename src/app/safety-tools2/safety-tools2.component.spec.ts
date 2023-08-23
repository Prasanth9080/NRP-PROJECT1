import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyTools2Component } from './safety-tools2.component';

describe('SafetyTools2Component', () => {
  let component: SafetyTools2Component;
  let fixture: ComponentFixture<SafetyTools2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyTools2Component]
    });
    fixture = TestBed.createComponent(SafetyTools2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

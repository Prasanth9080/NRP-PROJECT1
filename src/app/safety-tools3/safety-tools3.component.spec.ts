import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyTools3Component } from './safety-tools3.component';

describe('SafetyTools3Component', () => {
  let component: SafetyTools3Component;
  let fixture: ComponentFixture<SafetyTools3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyTools3Component]
    });
    fixture = TestBed.createComponent(SafetyTools3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

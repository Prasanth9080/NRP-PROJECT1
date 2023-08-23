import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyToolsComponent } from './safety-tools.component';

describe('SafetyToolsComponent', () => {
  let component: SafetyToolsComponent;
  let fixture: ComponentFixture<SafetyToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyToolsComponent]
    });
    fixture = TestBed.createComponent(SafetyToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instuments2Component } from './instuments2.component';

describe('Instuments2Component', () => {
  let component: Instuments2Component;
  let fixture: ComponentFixture<Instuments2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Instuments2Component]
    });
    fixture = TestBed.createComponent(Instuments2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

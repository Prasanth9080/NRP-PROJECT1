import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manpower3Component } from './manpower3.component';

describe('Manpower3Component', () => {
  let component: Manpower3Component;
  let fixture: ComponentFixture<Manpower3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Manpower3Component]
    });
    fixture = TestBed.createComponent(Manpower3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

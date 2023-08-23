import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manpower2Component } from './manpower2.component';

describe('Manpower2Component', () => {
  let component: Manpower2Component;
  let fixture: ComponentFixture<Manpower2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Manpower2Component]
    });
    fixture = TestBed.createComponent(Manpower2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Machinery2Component } from './machinery2.component';

describe('Machinery2Component', () => {
  let component: Machinery2Component;
  let fixture: ComponentFixture<Machinery2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Machinery2Component]
    });
    fixture = TestBed.createComponent(Machinery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

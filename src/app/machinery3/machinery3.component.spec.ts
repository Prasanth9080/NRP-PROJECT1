import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Machinery3Component } from './machinery3.component';

describe('Machinery3Component', () => {
  let component: Machinery3Component;
  let fixture: ComponentFixture<Machinery3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Machinery3Component]
    });
    fixture = TestBed.createComponent(Machinery3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

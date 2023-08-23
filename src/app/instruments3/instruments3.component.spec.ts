import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instruments3Component } from './instruments3.component';

describe('Instruments3Component', () => {
  let component: Instruments3Component;
  let fixture: ComponentFixture<Instruments3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Instruments3Component]
    });
    fixture = TestBed.createComponent(Instruments3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

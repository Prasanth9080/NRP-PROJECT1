import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumables3Component } from './consumables3.component';

describe('Consumables3Component', () => {
  let component: Consumables3Component;
  let fixture: ComponentFixture<Consumables3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Consumables3Component]
    });
    fixture = TestBed.createComponent(Consumables3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

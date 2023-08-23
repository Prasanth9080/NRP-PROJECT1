import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumables2Component } from './consumables2.component';

describe('Consumables2Component', () => {
  let component: Consumables2Component;
  let fixture: ComponentFixture<Consumables2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Consumables2Component]
    });
    fixture = TestBed.createComponent(Consumables2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

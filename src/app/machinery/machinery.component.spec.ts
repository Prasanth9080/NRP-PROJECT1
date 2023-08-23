import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryComponent } from './machinery.component';

describe('MachineryComponent', () => {
  let component: MachineryComponent;
  let fixture: ComponentFixture<MachineryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineryComponent]
    });
    fixture = TestBed.createComponent(MachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

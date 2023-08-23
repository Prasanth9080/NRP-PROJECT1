import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDataComponent } from './daily-data.component';

describe('DailyDataComponent', () => {
  let component: DailyDataComponent;
  let fixture: ComponentFixture<DailyDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyDataComponent]
    });
    fixture = TestBed.createComponent(DailyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTacklesComponent } from './tools-tackles.component';

describe('ToolsTacklesComponent', () => {
  let component: ToolsTacklesComponent;
  let fixture: ComponentFixture<ToolsTacklesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsTacklesComponent]
    });
    fixture = TestBed.createComponent(ToolsTacklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

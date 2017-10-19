import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccademicYearComponent } from './accademic-year.component';

describe('AccademicYearComponent', () => {
  let component: AccademicYearComponent;
  let fixture: ComponentFixture<AccademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

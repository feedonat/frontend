import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSettingComponent } from './subject-setting.component';

describe('SubjectSettingComponent', () => {
  let component: SubjectSettingComponent;
  let fixture: ComponentFixture<SubjectSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

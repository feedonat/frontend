import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSettingComponent } from './class-setting.component';

describe('ClassSettingComponent', () => {
  let component: ClassSettingComponent;
  let fixture: ComponentFixture<ClassSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

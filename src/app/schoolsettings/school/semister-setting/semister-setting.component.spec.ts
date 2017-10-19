import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemisterSettingComponent } from './semister-setting.component';

describe('SemisterSettingComponent', () => {
  let component: SemisterSettingComponent;
  let fixture: ComponentFixture<SemisterSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemisterSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemisterSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

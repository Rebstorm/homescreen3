import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersettingsComponent } from './weathersettings.component';

describe('WeathersettingsComponent', () => {
  let component: WeathersettingsComponent;
  let fixture: ComponentFixture<WeathersettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathersettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

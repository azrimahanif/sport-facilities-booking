import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLoginPage } from './staff-login.page';

describe('StaffLoginPage', () => {
  let component: StaffLoginPage;
  let fixture: ComponentFixture<StaffLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

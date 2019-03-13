import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInfoPage } from './booking-info.page';

describe('BookingInfoPage', () => {
  let component: BookingInfoPage;
  let fixture: ComponentFixture<BookingInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

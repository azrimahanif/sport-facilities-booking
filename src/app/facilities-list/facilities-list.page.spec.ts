import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesListPage } from './facilities-list.page';

describe('FacilitiesListPage', () => {
  let component: FacilitiesListPage;
  let fixture: ComponentFixture<FacilitiesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

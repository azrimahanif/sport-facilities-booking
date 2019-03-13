import { TestBed } from '@angular/core/testing';

import { BookingInfoService } from './booking-info.service';

describe('BookingInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingInfoService = TestBed.get(BookingInfoService);
    expect(service).toBeTruthy();
  });
});

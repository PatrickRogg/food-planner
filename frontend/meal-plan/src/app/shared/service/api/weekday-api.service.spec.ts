import { TestBed } from '@angular/core/testing';

import { WeekdayApiService } from './weekday-api.service';

describe('WeekdayApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekdayApiService = TestBed.get(WeekdayApiService);
    expect(service).toBeTruthy();
  });
});

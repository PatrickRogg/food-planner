import { TestBed } from '@angular/core/testing';

import { MealApiService } from './meal-api.service';

describe('MealApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealApiService = TestBed.get(MealApiService);
    expect(service).toBeTruthy();
  });
});

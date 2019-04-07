import { TestBed } from '@angular/core/testing';

import { MealDetailStateService } from './meal-detail-state.service';

describe('MealDetailStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealDetailStateService = TestBed.get(MealDetailStateService);
    expect(service).toBeTruthy();
  });
});

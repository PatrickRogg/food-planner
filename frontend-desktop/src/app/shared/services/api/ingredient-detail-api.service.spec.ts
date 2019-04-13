import { TestBed } from '@angular/core/testing';

import { IngredientDetailApiService } from './ingredient-detail-api.service';

describe('IngredientDetailApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientDetailApiService = TestBed.get(IngredientDetailApiService);
    expect(service).toBeTruthy();
  });
});

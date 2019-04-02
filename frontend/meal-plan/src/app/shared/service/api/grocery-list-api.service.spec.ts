import { TestBed } from '@angular/core/testing';

import { GroceryListApiService } from './grocery-list-api.service';

describe('GroceryListApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceryListApiService = TestBed.get(GroceryListApiService);
    expect(service).toBeTruthy();
  });
});

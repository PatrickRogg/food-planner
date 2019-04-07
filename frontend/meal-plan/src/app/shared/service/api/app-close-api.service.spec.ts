import { TestBed } from '@angular/core/testing';

import { AppCloseApiService } from './app-close-api.service';

describe('AppCloseApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCloseApiService = TestBed.get(AppCloseApiService);
    expect(service).toBeTruthy();
  });
});

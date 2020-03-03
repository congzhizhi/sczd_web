import { TestBed } from '@angular/core/testing';

import { StroageService } from './stroage.service';

describe('StroageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StroageService = TestBed.get(StroageService);
    expect(service).toBeTruthy();
  });
});

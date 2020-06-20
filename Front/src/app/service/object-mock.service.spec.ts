import { TestBed } from '@angular/core/testing';

import { ObjectMockService } from './object-mock.service';

describe('ObjectMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectMockService = TestBed.get(ObjectMockService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FireApiServiceService } from './fire-api-service.service';

describe('FireApiServiceService', () => {
  let service: FireApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

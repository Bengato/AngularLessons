import { TestBed } from '@angular/core/testing';

import { AuthorsServiceService } from './authors-service.service';

describe('AuthorsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorsServiceService = TestBed.get(AuthorsServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GitService } from './git-service';

describe('GitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitService = TestBed.get(GitService);
    expect(service).toBeTruthy();
  });
});

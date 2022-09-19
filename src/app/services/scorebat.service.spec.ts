import { TestBed } from '@angular/core/testing';

import { ScorebatService } from './scorebat.service';

describe('ScorebatService', () => {
  let service: ScorebatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorebatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

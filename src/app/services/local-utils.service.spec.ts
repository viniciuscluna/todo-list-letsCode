import { TestBed } from '@angular/core/testing';

import { LocalUtilsService } from './local-utils.service';

describe('LocalUtilsService', () => {
  let service: LocalUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

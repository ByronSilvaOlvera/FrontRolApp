import { TestBed } from '@angular/core/testing';

import { RolappuserService } from './rolappuser.service';

describe('RolappuserService', () => {
  let service: RolappuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolappuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

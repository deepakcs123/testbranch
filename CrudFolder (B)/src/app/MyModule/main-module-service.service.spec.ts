import { TestBed } from '@angular/core/testing';

import { MainModuleServiceService } from './main-module-service.service';

describe('MainModuleServiceService', () => {
  let service: MainModuleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainModuleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

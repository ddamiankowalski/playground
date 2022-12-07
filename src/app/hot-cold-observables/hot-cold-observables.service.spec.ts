import { TestBed } from '@angular/core/testing';

import { HotColdObservablesService } from './hot-cold-observables.service';

describe('HotColdObservablesService', () => {
  let service: HotColdObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotColdObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IntervalOperatorService } from './interval-operator.service';

describe('IntervalOperatorService', () => {
  let service: IntervalOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervalOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

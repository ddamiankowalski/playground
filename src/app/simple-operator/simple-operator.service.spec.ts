import { TestBed } from '@angular/core/testing';

import { SimpleOperatorService } from './simple-operator.service';

describe('SimpleOperatorService', () => {
  let service: SimpleOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

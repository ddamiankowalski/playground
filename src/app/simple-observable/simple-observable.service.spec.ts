import { TestBed } from '@angular/core/testing';

import { SimpleObservableService } from './simple-observable.service';

describe('SimpleObservableService', () => {
  let service: SimpleObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

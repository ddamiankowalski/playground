import { TestBed } from '@angular/core/testing';

import { MapFilterOperatorService } from './map-filter-operator.service';

describe('MapFilterOperatorService', () => {
  let service: MapFilterOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapFilterOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

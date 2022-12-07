import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFilterOperatorComponent } from './map-filter-operator.component';

describe('MapFilterOperatorComponent', () => {
  let component: MapFilterOperatorComponent;
  let fixture: ComponentFixture<MapFilterOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapFilterOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapFilterOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

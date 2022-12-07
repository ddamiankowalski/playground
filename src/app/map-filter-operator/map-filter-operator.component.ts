import { Component, OnInit } from '@angular/core';
import { ObservablesService } from '../services/observables.service';
import { SimpleObservableComponent } from '../simple-observable/simple-observable.component';
import { MapFilterOperatorService } from './map-filter-operator.service';

@Component({
  selector: 'app-map-filter-operator',
  templateUrl: './map-filter-operator.component.html',
  providers: [
    {
      provide: ObservablesService, useClass: MapFilterOperatorService
    }
  ]
})
export class MapFilterOperatorComponent extends SimpleObservableComponent {

  constructor(
    public override observables: ObservablesService
  ) { 
    super(
      observables
    )
  }
}

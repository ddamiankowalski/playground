import { Component } from '@angular/core';
import { ObservablesService } from '../services/observables.service';
import { SimpleObservableComponent } from '../simple-observable/simple-observable.component';
import { SimpleOperatorService } from './simple-operator.service';

@Component({
  selector: 'app-simple-operator',
  templateUrl: './simple-operator.component.html',
  providers: [
    {
      provide: ObservablesService, useClass: SimpleOperatorService
    }
  ]
})
export class SimpleOperatorComponent extends SimpleObservableComponent {

  constructor(
    public override observables: ObservablesService
  ) {
    super(
      observables
    );
  }
}

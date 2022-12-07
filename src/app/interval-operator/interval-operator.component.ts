import { Component } from '@angular/core';
import { ObservablesService } from '../services/observables.service';
import { SimpleObservableComponent } from '../simple-observable/simple-observable.component';
import { IntervalOperatorService } from './interval-operator.service';

@Component({
  selector: 'app-interval-operator',
  templateUrl: './interval-operator.component.html',
  providers: [
    {
      provide: ObservablesService, useClass: IntervalOperatorService
    }
  ]
})
export class IntervalOperatorComponent extends SimpleObservableComponent {

  constructor(
    public override observables: ObservablesService
  ) { 
    super(
      observables
    )
  }

}

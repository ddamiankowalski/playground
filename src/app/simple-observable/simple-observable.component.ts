import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservablesService } from '../services/observables.service';

@Component({
  selector: 'app-observable-component',
  templateUrl: './simple-observable.component.html'
})
export class SimpleObservableComponent {

  constructor(
    public observables: ObservablesService
  ) { }

  observableOutput$?: Observable<any>;
  isOutputVisible: boolean = false;
  @Input() card?: any;

  startEmitting(): void {
    this.isOutputVisible = true;
    this.observableOutput$ = this.observables.createObservable();
  }
}

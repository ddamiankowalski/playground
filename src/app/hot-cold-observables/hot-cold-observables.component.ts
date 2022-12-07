import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObservablesService } from '../services/observables.service';
import { SimpleObservableComponent } from '../simple-observable/simple-observable.component';
import { HotColdObservablesService } from './hot-cold-observables.service';

@Component({
  selector: 'app-hot-cold-observables',
  templateUrl: './hot-cold-observables.component.html',
  providers: [
    {
      provide: ObservablesService, useClass: HotColdObservablesService
    }
  ]
})
export class HotColdObservablesComponent extends SimpleObservableComponent {

  constructor(
    public override observables: ObservablesService
  ) {
    super(
      observables
    );
   }

   outputFirst?: string | number;
   outputSecond?: string | number;

   isOutputVisibleFirst: boolean = false;
   isOutputVisibleSecond: boolean = false;
   subscriptions?: Subscription;

   unsubscribe(): void {
    this.subscriptions?.unsubscribe();
   }

   assignValues(type: string | undefined, values: any) {
    if(type === 'first') {
      this.isOutputVisibleFirst = true;
      this.outputFirst = values;
    } else {
      this.isOutputVisibleSecond = true;
      this.outputSecond = values;
    }
   }

   override startEmitting(type?: 'first' | 'second'): void {
    if(!this.observableOutput$) {
      this.observableOutput$ = this.observables.createObservable();
    }
    const subscription = this.observableOutput$.subscribe(values => this.assignValues(type, values))
    if(this.subscriptions) {
      this.subscriptions.add(subscription)
    } else {
      this.subscriptions = subscription;
    }
   }
}

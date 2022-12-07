import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RxJsMainComponent } from './rxjsmain.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CardComponent } from './card/card.component';
import { ObservableOutputComponent } from './observable-output/observable-output.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardNavIconComponent } from './card-nav-icon/card-nav-icon.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { IntervalOperatorComponent } from './interval-operator/interval-operator.component';

import { RXJS_CONFIG } from './rxjs.config';
import { MapFilterOperatorComponent } from './map-filter-operator/map-filter-operator.component';
import { HotColdObservablesComponent } from './hot-cold-observables/hot-cold-observables.component';

@NgModule({
  declarations: [
    RxJsMainComponent,
    MainContainerComponent,
    CardComponent,
    ObservableOutputComponent,
    CardNavIconComponent,
    SimpleObservableComponent,
    IntervalOperatorComponent,
    MapFilterOperatorComponent,
    HotColdObservablesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'RXJS_CONFIG', useValue: RXJS_CONFIG
    }
  ],
  bootstrap: [RxJsMainComponent]
})
export class RxJsMainModule { }

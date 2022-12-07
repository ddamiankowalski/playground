import { HotColdObservablesComponent } from "./hot-cold-observables/hot-cold-observables.component";
import { IntervalOperatorComponent } from "./interval-operator/interval-operator.component";
import { MapFilterOperatorComponent } from "./map-filter-operator/map-filter-operator.component";
import { SimpleObservableComponent } from "./simple-observable/simple-observable.component";

export const RXJS_CONFIG = [
    {
        name: 'observable',
        header: 'observable creation',
        subHeader: 'A simple observable creation "of" operator, if the button subscribe is pressed it will output true',
        unsubscribe: false,
        component: SimpleObservableComponent
    },
    {
        name: 'interval',
        header: 'interval creation',
        subHeader: 'Creating and emitting data using "interval" operator',
        unsubscribe: false,
        component: IntervalOperatorComponent
    },
    {
        name: 'map operator',
        header: 'map and filter operators',
        subHeader: 'Below is the output of the modified observable with the filter and map operators. It uses fromEvent to catch mousemove event and then maps it to a value of coordinates and filters unwanted values',
        unsubscribe: false,
        component: MapFilterOperatorComponent
    },
    {
        name: 'hot & cold',
        header: 'hot & cold',
        subHeader: 'The buttons will trigger two seperate hot observable subscriptions',
        unsubscribe: true,
        component: HotColdObservablesComponent
    },
]
import { SimpleObservableComponent } from "./simple-observable/simple-observable.component";
import { SimpleOperatorComponent } from "./simple-operator/simple-operator.component";

export const RXJS_CONFIG = [
    {
        name: 'observable',
        header: 'observable creation',
        subHeader: 'a simple observable creation with subscription and output',
        unsubscribe: false,
        component: SimpleObservableComponent
    },
    {
        name: 'observabletwo',
        header: 'observable creationtwo',
        subHeader: 'a simple observable creation with subscription and output',
        unsubscribe: false,
        component: SimpleOperatorComponent
    },
]
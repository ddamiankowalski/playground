import { Observable } from "rxjs";

export interface Example {
    createObservable: () => Observable<any>
}

import { Injectable } from '@angular/core';
import { interval, Observable, share } from 'rxjs';
import { Example } from '../services/example';

@Injectable({
  providedIn: 'root'
})
export class HotColdObservablesService implements Example {

  constructor() { }

  createObservable(): Observable<any> {
    return interval(10)
      .pipe(
        share()
      );
  }
}

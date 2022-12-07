import { Injectable } from '@angular/core';
import { filter, interval, Observable, of } from 'rxjs';
import { Example } from '../services/example';

@Injectable({
  providedIn: 'root'
})
export class IntervalOperatorService implements Example {

  constructor() { }

  createObservable(): Observable<any> {
    return interval(1).pipe(
        filter(value => value % 2 === 0)
      )
  }
}

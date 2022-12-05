import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleOperatorService {

  constructor() { }

  createObservable(): Observable<any> {
    return new Observable((observer) => {
      observer.next('test!')
      observer.complete()

      return () => {
        console.log('clean up')
      }
    })
  }
}

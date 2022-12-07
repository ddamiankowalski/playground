import { Injectable } from '@angular/core';
import { filter, fromEvent, map, Observable, tap } from 'rxjs';
import { Example } from '../services/example';

@Injectable({
  providedIn: 'root'
})
export class MapFilterOperatorService implements Example {

  constructor() { }

  createObservable(): Observable<any> {
    return fromEvent(document , 'mousemove')
      .pipe(
        map((mouseEvent: any) => [mouseEvent.pageX, mouseEvent.pageY]),
        filter(coordinates => {
          const [x, y] = coordinates;
          return x < 400 && y < 400;
        })
      )
  }
}

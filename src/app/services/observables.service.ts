import { Injectable, Inject } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  constructor(
    @Inject('RXJS_CONFIG') private RXJS_CONFIG: any
  ) { }

  cardChange: Subject<boolean> = new Subject();

  currentConfig: any;
  currentIndex: number = 0;

  observeCardChange(): Observable<boolean> {
    return this.cardChange.asObservable();
  }

  initConfig(): void {
    this.currentConfig = this.RXJS_CONFIG[this.currentIndex];
  }

  swapCard(side: 'left' | 'right'): void {
    side === 'right' ? this.swipeRight() : this.swipeLeft()
  }

  swipeRight() {
    if((this.currentIndex + 1) !== this.RXJS_CONFIG.length) {
      this.currentIndex++;
      this.currentConfig = this.RXJS_CONFIG[this.currentIndex];
      this.cardChange.next(true);
    }
  }

  swipeLeft() {
    if(this.currentIndex !== 0) {
      this.currentIndex--;
      this.currentConfig = this.RXJS_CONFIG[this.currentIndex];
      this.cardChange.next(true);
    }
  }

  createObservable(): Observable<any> {
    return new Observable((observer) => {
      let secondsPassed: boolean = false;
      observer.next('observer started');

      const interval = setInterval(() => {
        if(!secondsPassed) {
          observer.next('three seconds have passed');
          secondsPassed = true;
        } else {
          observer.next('completed the stream')
          observer.complete();
        }
      }, 3000)

      return () => {
        clearInterval(interval);
        console.log('Unsubscribed!')
      }
    })
  }
}

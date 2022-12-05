import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  constructor(
    @Inject('RXJS_CONFIG') private RXJS_CONFIG: any
  ) { }

  currentCard: any;
  currentIndex: number = 0;

  initConfig(): void {
    this.currentCard = this.RXJS_CONFIG[this.currentIndex];
  }

  swapCard(side: 'left' | 'right'): void {
    side === 'right' ? this.swipeRight() : this.swipeLeft()
  }

  swipeRight() {
    if((this.currentIndex + 1) !== this.RXJS_CONFIG.length) {
      this.currentIndex++;
      this.currentCard = this.RXJS_CONFIG[this.currentIndex];
    }
  }

  swipeLeft() {
    if(this.currentIndex !== 0) {
      this.currentIndex--;
      this.currentCard = this.RXJS_CONFIG[this.currentIndex];
    }
  }

  createObservable(): Observable<any> {
    return new Observable((observer) => {
      let value: number = 0;

      const interval = setInterval(() => {
        observer.next(`value emitted:  ${value++}`);
      }, 2000)

      return () => {
        console.log('The subscription has been cleaned up!')
        clearInterval(interval);
      }
    })
  }
}
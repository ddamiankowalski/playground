import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ObservablesService } from '../services/observables.service';
import { catchError, Observable, retry } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit, OnDestroy {

  constructor(
    private observables: ObservablesService
  ) { }

  @Input() card: any;

  observableOutput?: Observable<any>;
  outputActive: boolean = false;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  handleCardAction(): void {
    this.outputActive = true;
    this.observableOutput = this.observables.createObservable();
  }
}

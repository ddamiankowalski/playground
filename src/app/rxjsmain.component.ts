import { Component, OnInit } from '@angular/core';
import { ObservablesService } from './services/observables.service';

@Component({
  selector: 'rxjsapp-main-root',
  templateUrl: './rxjsmain.component.html',
  providers: []
})
export class RxJsMainComponent implements OnInit {
  constructor(
    public observables: ObservablesService
  ) {}

  ngOnInit(): void {
    this.observables.initConfig();
  }

  cardToggle(side: 'left' | 'right'): void {
    this.observables.swapCard(side);
  }
}

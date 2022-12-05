import { Component, OnInit, OnDestroy, Input, ViewChild, ViewContainerRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ObservablesService } from '../services/observables.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('cardContainer', { read: ViewContainerRef, static: true }) cardContainer!: ViewContainerRef;

  constructor(
    private observables: ObservablesService,
    private cdRef: ChangeDetectorRef
  ) { }

  observableOutput?: Observable<any>;
  outputActive: boolean = false;

  ngOnInit(): void {
    this.observables.observeCardChange()
      .subscribe(() => this.setNewCard())
  }

  ngAfterViewInit(): void {
    this.setNewCard();
  }

  ngOnDestroy(): void {
    
  }

  setNewCard(): void {
    this.cardContainer.clear();
    const ref = this.cardContainer.createComponent(this.observables.currentConfig.component)
    ref.setInput('card', this.observables.currentConfig);  
    this.cdRef.detectChanges();
  }

  handleCardAction(): void {
    this.outputActive = true;
    this.observableOutput = this.observables.createObservable();
  }
}

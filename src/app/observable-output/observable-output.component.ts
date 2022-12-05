import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-observable-output',
  templateUrl: './observable-output.component.html',
  animations: [
    trigger('voidAnimation', [
      transition(':enter', [
        style({ opacity: 0, display: 'absolute', height: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1, height: '*' }))
      ])
    ])
  ]
})
export class ObservableOutputComponent implements OnInit {

  constructor() { }

  @Input() isVisible: boolean = false;

  ngOnInit(): void {
  }

}

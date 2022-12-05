import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-nav-icon',
  templateUrl: './card-nav-icon.component.html'
})
export class CardNavIconComponent implements OnInit {

  constructor() { }

  text: 'show next' | 'show previous' | undefined;
  @Input() type!: 'left' | 'right';

  ngOnInit(): void {
    this.text = this.type == 'left' ? 'show previous' : 'show next'; 
  }

}

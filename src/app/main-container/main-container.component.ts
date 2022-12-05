import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  public welcomeMessage: string = 'RxJS Operators Examples';
  public subText: string = 'Explore practical examples of RxJS'

  ngOnInit(): void {
  }

}

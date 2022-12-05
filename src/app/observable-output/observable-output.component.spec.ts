import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOutputComponent } from './observable-output.component';

describe('ObservableOutputComponent', () => {
  let component: ObservableOutputComponent;
  let fixture: ComponentFixture<ObservableOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

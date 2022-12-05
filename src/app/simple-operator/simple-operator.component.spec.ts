import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleOperatorComponent } from './simple-operator.component';

describe('SimpleOperatorComponent', () => {
  let component: SimpleOperatorComponent;
  let fixture: ComponentFixture<SimpleOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

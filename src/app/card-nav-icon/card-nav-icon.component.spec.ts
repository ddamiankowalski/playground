import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNavIconComponent } from './card-nav-icon.component';

describe('CardNavIconComponent', () => {
  let component: CardNavIconComponent;
  let fixture: ComponentFixture<CardNavIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNavIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

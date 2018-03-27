import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfTheWeakComponent } from './game-of-the-weak.component';

describe('GameOfTheWeakComponent', () => {
  let component: GameOfTheWeakComponent;
  let fixture: ComponentFixture<GameOfTheWeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOfTheWeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfTheWeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

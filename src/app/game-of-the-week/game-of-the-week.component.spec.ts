import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfTheweekComponent } from './game-of-the-week.component';

describe('GameOfTheweekComponent', () => {
  let component: GameOfTheweekComponent;
  let fixture: ComponentFixture<GameOfTheweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOfTheweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfTheweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

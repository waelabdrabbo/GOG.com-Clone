import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../games-model';

@Component({
  selector: 'app-game-of-the-week',
  templateUrl: './game-of-the-week.component.html',
  styleUrls: ['./game-of-the-week.component.scss']
})
export class GameOfTheWeekComponent implements OnInit, OnDestroy {
  @Input() product: Game;
  games: Game[];
  inCart = [];
  // get the Game of the Week only
  filterGame(game: any) {
    return game.gameOfTheWeek === true;
  }
  constructor(private gameServices: GamesService) { }

  ngOnInit() {
    this.gameServices.fetchGamesFromDB().subscribe(
      games => {
        this.gameServices.setAllGames(games);
        this.games = this.gameServices.getAllGames();
      },
      err => console.log(err),
    );
    this.inCart = this.gameServices.inCart;
  }
  addToCart(game: Game) {
    this.gameServices.addToCart(game);
  }
  ngOnDestroy() {
    this.games = [];
  }
}

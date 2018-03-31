import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../games-model';

@Component({
  selector: 'app-featured-games',
  templateUrl: './featured-games.component.html',
  styleUrls: ['./featured-games.component.scss']
})
export class FeaturedGamesComponent implements OnInit, OnDestroy {
  @Input() game: Game;
  games: Game[];
  inCart = [];
  filterGame(game: any) {
    return !game.gameOfTheWeek === true;
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

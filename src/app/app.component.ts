import { Component } from '@angular/core';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor( private gamesService: GamesService) {
  }
}

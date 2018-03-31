import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedGamesComponent } from './featured-games/featured-games.component';
import { GameOfTheWeekComponent } from './game-of-the-week/game-of-the-week.component';
import { GamesService } from './services/games.service';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

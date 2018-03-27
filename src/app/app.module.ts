import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GameOfTheWeekComponent } from './game-of-the-week/game-of-the-week.component';
import { FeaturedGamesComponent } from './featured-games/featured-games.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameOfTheWeekComponent,
    FeaturedGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

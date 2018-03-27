import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GameOfTheWeakComponent } from './game-of-the-weak/game-of-the-weak.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameOfTheWeakComponent
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

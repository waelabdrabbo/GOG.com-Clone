import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Game } from '../games-model';

@Injectable()

export class GamesService {

  cartAdditionEmitter = new EventEmitter<Game[]>();
  cartTotalEmitter = new EventEmitter<number>();
  private allGames: Game[];
  private cartAddedGames: Game[] = [];
  private cartTotal = 0;
  private selectedGames: Game;
  public inCart = this.cartAddedGames;
  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  // Get the Games from the DataBase 'FireBase'
  fetchGamesFromDB(): Observable<any> {
    return this.httpClient.get(`${environment.dataBaseApi}/games.json`)
      .map(gameSingle => {
        const adjustedFetchedGames: any[] = [];
        for (const key in gameSingle) {
          if (gameSingle.hasOwnProperty(key)) {
            const prodToAdd = gameSingle[key];
            prodToAdd.id = key;
            adjustedFetchedGames.push(prodToAdd);
          }
        }
        return adjustedFetchedGames;
      });
  }

  // set the varabiles of the Games data
  setAllGames(fetchedGames: Game[]) {
    this.allGames = fetchedGames;
  }

  // slice the Game array
  getAllGames() {
    return this.allGames.slice();
  }

  // add to cart function
  addToCart(game: Game) {
    // add only one item
    if (this.cartAddedGames.indexOf(game) === -1) {
      this.cartAddedGames.push(game);
    }
    this.cartAdditionEmitter.emit(this.cartAddedGames);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);

  }

  getCartAddedGames() {
    return this.cartAddedGames;
  }

  // calculate the total of the cart
  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartAddedGames.forEach(element => {
      this.cartTotal += element.price * element.qty;
    });
  }

  getCartTotal() {
    return this.cartTotal;
  }

  // Manipulate the cart with the total games added
  cartGameManipulate(game: Game, increase: boolean = false) {
    const manipulatedGame = this.cartAddedGames.find(mp => mp === game);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
  }

  // remove only one item has added to cart
  removeCartSingleItem(itemIndex: number) {
    this.cartAddedGames[itemIndex].qty = 1;
    const removedGameName = this.cartAddedGames[itemIndex].title;
    this.cartAddedGames.splice(itemIndex, 1);
    this.cartAdditionEmitter.emit(this.cartAddedGames);
    this.calculateCartTotal();
    this.cartTotalEmitter.emit(this.cartTotal);
  }

  // clear items from cart
  emptyCart() {
    for (const cp of this.cartAddedGames) { cp.qty = 1; }
    this.cartAddedGames.length = 0;
    this.cartAdditionEmitter.emit(this.cartAddedGames);
    this.cartTotal = 0;
    this.cartTotalEmitter.emit(this.cartTotal);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GamesService } from '../services/games.service';
import { Game } from '../games-model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartGames: Game[];
  cartTotal: number;
  cartAdditionSubscription: Subscription;
  cartTotalSubscription: Subscription;
  constructor(private gameServices: GamesService) { }

  ngOnInit() {

    this.cartGames = this.gameServices.getCartAddedGames();
    this.cartAdditionSubscription = this.gameServices.cartAdditionEmitter.subscribe(
      (games: Game[]) => {
        this.cartGames = games;
      }
    );

    this.cartTotal = this.gameServices.getCartTotal();
    this.cartTotalSubscription = this.gameServices.cartTotalEmitter.subscribe(
      (cTotal: number) => {
        this.cartTotal = cTotal;
      }
    );
  }

  removeCartGame(itemIndex: number) {
    this.gameServices.removeCartSingleItem(itemIndex);
  }

  emptyCart() {
    this.gameServices.emptyCart();
  }


  ngOnDestroy() {
    this.cartAdditionSubscription.unsubscribe();
    this.cartTotalSubscription.unsubscribe();
  }

}

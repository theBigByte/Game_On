import { Component, OnInit,Input } from '@angular/core';
import { gameBuy } from '../shared/buygame.model';
import { gameService } from '../shared/buygame.service';
import { serverService } from '../shared/server.service';
import { cartModel } from '../shared/cart.model';

@Component({
  selector: 'app-buy-game',
  templateUrl: './buy-game.component.html',
  styleUrls: ['./buy-game.component.css'],
})
export class BuyGameComponent implements OnInit {

  buy:gameBuy[];
  

  constructor(private service: gameService,private httpServ:serverService) { }

  ngOnInit() {
    this.buy = this.service.getBuyingList();
  }

  onAddToCart(buying:gameBuy ){
 this.service.addItemToCart(buying);
  }
}

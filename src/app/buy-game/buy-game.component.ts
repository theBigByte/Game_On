import { Component, OnInit,Input } from '@angular/core';
import { gameBuy } from '../shared/buygame.model';
import { gameService } from '../shared/buygame.service';

@Component({
  selector: 'app-buy-game',
  templateUrl: './buy-game.component.html',
  styleUrls: ['./buy-game.component.css'],
})
export class BuyGameComponent implements OnInit {

  @Input() buy:gameBuy[];

  constructor(private service: gameService) { }

  ngOnInit() {
    this.buy = this.service.getBuyingList();
  }

  onAddToCart(buying:gameBuy ){
 this.service.addItemToCart(buying);
  }
}

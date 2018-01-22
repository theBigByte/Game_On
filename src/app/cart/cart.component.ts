import { Component, OnInit} from '@angular/core';
import { cartModel } from '../shared/cart.model';
import { cartService } from '../shared/cart.service';
import { gameBuy } from '../shared/buygame.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cart: gameBuy[];

  constructor(private service: cartService) {
  }

  ngOnInit() {
    this.cart = this.service.getCartItem();
  }
}

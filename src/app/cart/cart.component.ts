import { Component, OnInit} from '@angular/core';
import { cartModel } from '../shared/cart.model';
import { cartService } from '../shared/cart.service';
import { gameBuy } from '../shared/buygame.model';
import { serverService } from '../shared/server.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cart: gameBuy[];

  constructor(private service: cartService,private serverhttp:serverService) {
  }

  ngOnInit() {
    this.cart = this.service.getCartItem();
  }
  onSave(){
    this.serverhttp.storeServer(this.cart)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
  onGet(){
    this.serverhttp.getServer()
    .subscribe(
      (response:any[]) => console.log(response),
      error => console.log(error)
    )
  }
}

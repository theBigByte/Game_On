import { cartModel } from "./cart.model";
import { EventEmitter } from "@angular/core";
import { gameBuy } from "./buygame.model";
import { Subject } from "rxjs/Subject";

export class cartService{

    cartChanged = new Subject<gameBuy[]>();
    private cart: gameBuy[] = [];

    getCartItem(){
        return this.cart.slice();
    }

    addItem(cart:gameBuy){
        this.cart.push(cart);
        this.cartChanged.next([...this.cart.slice()]);
    }
}
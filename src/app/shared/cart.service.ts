import { cartModel } from "./cart.model";
import { EventEmitter } from "@angular/core";
import { gameBuy } from "./buygame.model";

export class cartService{

    cartChanged = new EventEmitter<gameBuy[]>();
    private cart: gameBuy[] = [];

    getCartItem(){
        return this.cart.slice();
    }

    addItem(cart:gameBuy){
        this.cart.push(cart);
        this.cartChanged.emit([...this.cart.slice()]);
    }
}
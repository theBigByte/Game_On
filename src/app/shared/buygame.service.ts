import { gameBuy } from "./buygame.model";
import { Injectable,EventEmitter } from "@angular/core";
import { cartService } from "./cart.service";

@Injectable()
export class gameService{

    private gameServ: gameBuy[] = [
        new gameBuy('batman','Batmobile and enhancements to signature features',"https://www.geek.com/wp-content/uploads/2016/02/batmans-625x352.jpg"),
        new gameBuy('GTA 5',
        "PlayStation 3 or Xbox 360 will be able to transfer their current Grand Theft Auto Online characters and progression to their choice of PlayStation 4 Xbox One or PC",
        "http://onlysp.com/wp-content/uploads/2015/01/maxresdefault.jpg")
    ];

    constructor(private cartSer: cartService){}

    getBuyingList(){
        return this.gameServ.slice();
    }

    addItemToCart(game:gameBuy){
        this.cartSer.addItem(game);
    }
}
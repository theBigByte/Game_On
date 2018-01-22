import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPostComponent } from './main-post/main-post.component';
import { HeaderComponent } from './header/header.component';
import { DetailPostComponent } from './main-post/detail-post/detail-post.component';
import { ListItemComponent } from './main-post/list-item/list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { BuyGameComponent } from './buy-game/buy-game.component';
import { ClickableItemComponent } from './main-post/list-item/clickable-item/clickable-item.component';
import { CartComponent } from './cart/cart.component';
import { cartService } from './shared/cart.service';
import { gameService } from './shared/buygame.service';
import { StartcomponentComponent } from './startcomponent/startcomponent.component';
import { gameBuy } from './shared/buygame.model';
import { cartModel } from './shared/cart.model';
import { SellGameComponent } from './sell-game/sell-game.component';
import { headerDirective } from './shared/header.directive';
import { FormsModule } from '@angular/forms';
import { gameListService } from './shared/gameList.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPostComponent,
    HeaderComponent,
    DetailPostComponent,
    ListItemComponent,
    BuyGameComponent,
    ClickableItemComponent,
    CartComponent,
    StartcomponentComponent,
    SellGameComponent,
    headerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [cartService,gameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

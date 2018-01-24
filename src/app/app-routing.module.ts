import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ListItemComponent } from './main-post/list-item/list-item.component';
import { DetailPostComponent } from './main-post/detail-post/detail-post.component';
import { MainPostComponent } from './main-post/main-post.component';
import { BuyGameComponent } from './buy-game/buy-game.component';
import { CartComponent } from './cart/cart.component';
import { StartcomponentComponent } from './startcomponent/startcomponent.component';
import { SellGameComponent } from './sell-game/sell-game.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const gameRoutes: Routes = [
    {path:'', redirectTo: '/homepage',pathMatch:'full'},
    {path:'main',component:MainPostComponent, children:[
        {path:'',component:StartcomponentComponent},
        {path:':id',component:DetailPostComponent}
    ]},
    {path: 'buy',component:BuyGameComponent},
    {path:'sell',component:SellGameComponent},
    {path: 'cart',component:CartComponent},
    {path: 'homepage',component:FirstpageComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(gameRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
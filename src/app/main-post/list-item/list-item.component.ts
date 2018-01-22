import { Component, OnInit,Input } from '@angular/core';
import { gameListModel } from '../../shared/gameList.model';
import { gameListService } from '../../shared/gameList.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  
})
export class ListItemComponent implements OnInit {

  gamelist : gameListModel[];

  constructor(private service: gameListService) { }

  /*this thing gets the gamelist from the game service method and 
  make it equal to gamelist for usage and for showing the list in 
  our app */
  ngOnInit() {
    this.gamelist = this.service.getGameList();
  }

}

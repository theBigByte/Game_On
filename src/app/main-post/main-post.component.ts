import { Component, OnInit } from '@angular/core';
import { gameListService } from '../shared/gameList.service';
import { gameListModel } from '../shared/gameList.model';

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.css'],
  providers: [gameListService]
})

export class MainPostComponent implements OnInit {

  selectedItem:gameListModel;
  
  constructor(private service: gameListService) { }

  ngOnInit() {
    this.service.gameEmiter
    .subscribe(
      (game:gameListModel)=>{
        this.selectedItem = game;
      }
    )
  }
}

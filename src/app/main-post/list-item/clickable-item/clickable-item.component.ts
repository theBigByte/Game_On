import { Component, OnInit, Input } from '@angular/core';
import { gameListModel } from '../../../shared/gameList.model';

@Component({
  selector: 'app-clickable-item',
  templateUrl: './clickable-item.component.html',
  styleUrls: ['./clickable-item.component.css']
})
export class ClickableItemComponent implements OnInit {

  @Input() clickItem: gameListModel;//input the model
  @Input() index:number;

  ngOnInit() {
  }

}

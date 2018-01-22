import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { gameListModel } from '../../shared/gameList.model';
import { gameListService } from '../../shared/gameList.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

 detailClickItem: gameListModel;
 id : number;

  constructor(private service:gameListService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.detailClickItem = this.service.getList(this.id);
      }
    );
  }

}

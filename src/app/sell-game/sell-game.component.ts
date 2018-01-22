import { Component, OnInit,ViewChild } from '@angular/core';
import { sellDetail } from '../shared/sellDetail.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sell-game',
  templateUrl: './sell-game.component.html',
  styleUrls: ['./sell-game.component.css']
})
export class SellGameComponent implements OnInit {

  @ViewChild('f') SellForm : NgForm; 

  details: sellDetail[];
  
  Sell = 'Sell your old games from here!!';
  sellItem = {
    name : '',
  detail : '',
  quantity : '',
  price : ''};
  
  submitted  = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.submitted = true;    
    this.sellItem.name = this.SellForm.value.name;
    this.sellItem.detail = this.SellForm.value.type;
    this.sellItem.quantity = this.SellForm.value.quantity;
    this.sellItem.price = this.SellForm.value.price;
  }
}

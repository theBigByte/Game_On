import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  @Input() index:number;

  appname = "gameOn";
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { MOCKS } from '../mock-stocks';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  mocks = MOCKS;
  
  constructor() { }

  ngOnInit() {
  }

}

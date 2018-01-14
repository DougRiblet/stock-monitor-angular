import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  mocks: Stock[];

  constructor(private stockService: StockService) { }

  getStocks(): void {
    this.mocks = this.stockService.getStocks();
  }

  ngOnInit() {
    this.getStocks();
  }

}

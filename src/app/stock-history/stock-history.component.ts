import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Stock } from '../stock';;
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

  stockHistory: object;
 
  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getStockHistory();
  }

  getStockHistory(): void {
    const ticker: string = this.route.snapshot.paramMap.get('ticker');
    this.stockService.getStockHistory(ticker)
      .subscribe(datum => this.stockHistory = datum["Time Series (Daily)"]);
  }
 
  goBack(): void {
    this.location.back();
  }
}

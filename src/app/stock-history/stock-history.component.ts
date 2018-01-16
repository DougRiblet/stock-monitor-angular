import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StockHistory } from '../stockHistory';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {
  
  tickerSymbol: string;
  stockHistory: StockHistory[] = [];
 
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
    this.tickerSymbol = ticker;
    this.stockService.getStockHistory(ticker)
      .subscribe(datum => {
        this.formatStockHistory(datum["Time Series (Daily)"]);
      });
  }

  formatStockHistory(obj): void {
    let thirtydays = [];
    let count = 30;

    for (let key in obj){
      if (!count) { break }
      let newobj = {};
      newobj['date'] = key;
      newobj['open'] = +obj[key]['1. open'];
      newobj['high'] = +obj[key]['2. high'];
      newobj['low'] = +obj[key]['3. low'];
      newobj['close'] = +obj[key]['4. close'];
      thirtydays.push(newobj);
      count -= 1;
    }
    this.stockHistory = thirtydays;
  }
 
  goBack(): void {
    this.location.back();
  }
}

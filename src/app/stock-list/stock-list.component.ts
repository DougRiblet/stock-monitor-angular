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

  addStock(ticker): void {
    this.stockService.addOneStock(ticker)
      .subscribe(function(data){
        let fresh = data["Meta Data"]["3. Last Refreshed"];
        let updated = new Date(fresh);
        let price = +data["Time Series (1min)"][fresh]["4. close"];
        let newStock = {ticker, price, updated};
        this.mocks.push(newStock);
      });
  }

  addFirstStock(ticker): void {
    this.stockService.addOneStock(ticker)
      .subscribe(function(data){
        let fresh = data["Meta Data"]["3. Last Refreshed"];
        let updated = new Date(fresh);
        let price = +data["Time Series (1min)"][fresh]["4. close"];
        let newStock = {ticker, price, updated};
        this.mocks = [newStock];
        console.log(this.mocks);
      });
  }

  deleteStock(ticker): void {
    this.mocks = this.mocks.filter(item => item.ticker !== ticker);
  }

  ngOnInit() {
    this.addFirstStock('WMT');
  }

}

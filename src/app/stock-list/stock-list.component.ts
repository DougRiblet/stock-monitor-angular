import { Component, OnInit, NgZone } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  mocks: Stock[] = [];

  constructor(private stockService: StockService, private _ngZone: NgZone) { }

  addStock(ticker): void {
    this.stockService.addOneStock(ticker)
      .subscribe(data => {
        let fresh = data["Meta Data"]["3. Last Refreshed"];
        let updated = new Date(fresh);
        let price = +data["Time Series (1min)"][fresh]["4. close"];
        let newStock = {ticker, price, updated};
        this._ngZone.run(() => {
          this.mocks.push(newStock);
        });
      });
  }

  // addFirstStock(ticker): void {
  //   this.stockService.addOneStock(ticker)
  //     .subscribe(data => {
  //       let fresh = data["Meta Data"]["3. Last Refreshed"];
  //       let updated = new Date(fresh);
  //       let price = +data["Time Series (1min)"][fresh]["4. close"];
  //       let newStock = {ticker, price, updated};
  //       this._ngZone.run(() => {
  //         this.mocks = [newStock];
  //       });
  //     });
  // }

  deleteStock(ticker): void {
    this.mocks = this.mocks.filter(item => item.ticker !== ticker);
  }

  ngOnInit() {
    this.addStock('WMT');
  }

}

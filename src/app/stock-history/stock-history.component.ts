import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Stock } from '../stock';
import { MOCKS } from '../mock-stocks';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

  @Input() stock: Stock;
 
  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getStock();
  }

  getStock(): void {
    const ticker: string = this.route.snapshot.paramMap.get('ticker');
    this.stockService.getStock(ticker)
      .subscribe(datum => this.stock = datum);
  }
 
  goBack(): void {
    this.location.back();
  }
}

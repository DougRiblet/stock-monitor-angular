import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Stock } from './stock';
import { MOCKS } from './mock-stocks';

@Injectable()
export class StockService {

  constructor() { }

  getStocks(): Observable<Stock[]> {
    return of(MOCKS);
  }

  getStock(ticker: string): Observable<Stock> {
    return of(MOCKS.find(item => item.ticker === ticker));
  }

}

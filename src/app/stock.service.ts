import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { MOCKS } from './mock-stocks';

@Injectable()
export class StockService {

  constructor() { }

  getStocks(): Stock[] {
    return MOCKS;
  }
}

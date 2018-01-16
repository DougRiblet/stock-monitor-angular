import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Stock } from './stock';

@Injectable()
export class StockService {

  constructor(private http: HttpClient) { }

  addOneStock(ticker: string) {
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=2FFXT4V84WCOQ5GG`;

    return this.http.get(url)
      .pipe(
        catchError(this.handleError(`addOneStock ticker=${ticker}`))
      );
  }

  getStockHistory(ticker: string) {
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=2FFXT4V84WCOQ5GG`;

    return this.http.get(url)
      .pipe(
        catchError(this.handleError(`getStockHistory ticker=${ticker}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

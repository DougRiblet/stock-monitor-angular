import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { StockService } from './stock.service';


@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

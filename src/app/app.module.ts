import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    AppRoutingModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

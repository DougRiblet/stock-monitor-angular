import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  { path: '', component: StockListComponent },
  { path: '/:ticker', component: StockHistoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
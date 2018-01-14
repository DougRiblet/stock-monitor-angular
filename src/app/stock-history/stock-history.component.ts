import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Stock } from '../stock';
import { MOCKS } from '../mock-stocks';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

  @Input() stock: Stock;
 
  constructor(
    private route: ActivatedRoute,
    // private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
  }

}

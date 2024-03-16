import { Component } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  constructor(private stockService: StockService) {}

  stocks = this.stockService.getAllStocks();

}

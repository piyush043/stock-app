import { Component } from '@angular/core';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {

  stocks = [
    {'id': 1, 'name': 'Apple', 'symbol': 'APPL', 'last_price': '185.00', 'market_cap': '', 'tag': ''},
    {'id': 2, 'name': 'Google', 'symbol': 'GOOG', 'last_price': '142.00', 'market_cap': '', 'tag': ''},
    {'id': 3, 'name': 'Broadcom', 'symbol': 'AVGO', 'last_price': '1280.31', 'market_cap': '', 'tag': ''},
    {'id': 4, 'name': 'Meta', 'symbol': 'META', 'last_price': '453.21', 'market_cap': '', 'tag': ''},
  ];

}

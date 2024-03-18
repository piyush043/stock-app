
export class StockService {
  
  getAllStocks():Stock[] {
    let stocks:Stock[] = [
      {'id': 1, 'name': 'Apple', 'symbol': 'APPL', 'last_price': 185.00, 'market_cap': 321132134, 'tag': ''},
      {'id': 2, 'name': 'Google', 'symbol': 'GOOG', 'last_price': 142.00, 'market_cap': 513242134, 'tag': ''},
      {'id': 3, 'name': 'Broadcom', 'symbol': 'AVGO', 'last_price': 1280.31, 'market_cap': 134123423, 'tag': ''},
      {'id': 4, 'name': 'Meta', 'symbol': 'META', 'last_price': 453.21, 'market_cap': 312423142, 'tag': ''},
    ];
    return stocks;
  } 

}

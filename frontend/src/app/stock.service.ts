import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Stock } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  constructor(private http: HttpClient) {}

  private subjectStockDeleted: Subject<number> = new Subject<number>();
  private subjectReset: Subject<boolean> = new Subject<boolean>();

  // `callStockDeleted` method can be subscribed to observe changes in `subjectStockDeleted`
  callStockDeleted(): Observable<number> {
    return this.subjectStockDeleted.asObservable();
  }
  
  // Emitting stockId as `val` of deleted stock, which multicasts `val` to all subscribers
  setSubjectStockDeleted(val:number) {
    this.subjectStockDeleted.next(val);
  }
  
  // `callResetData` method can be subscribed to observe changes in `subjectReset`
  callResetData(): Observable<boolean> {
    return this.subjectReset.asObservable();
  }
  
  // Multicasting reset value as `val` to all subscribers
  setSubjectResetData(val:boolean) {
    this.subjectReset.next(val);
  }

  // API call to fetch all stocks from server
  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stocks');
  }

  // API call to server to delete stock with stockId
  deleteStock(stockId: number) {
    let url = `/api/stocks/${stockId}`; 
    return this.http.delete(url);
  }

  // API call to get unique tags available on JSON data
  getFilterTags(): Observable<string[]> {
    return this.http.get<string[]>('/api/tags');
  }

  // APi call to reset app data on server (copy from stock-master.json)
  resetData() {
    return this.http.post('/api/reset', {});
  }

  // Event Emiter used when stock is selected from table
  stockDetailsClicked: EventEmitter<Stock> = new EventEmitter<Stock>();
  
  // Method to emit stock details when stock link is clicked
  showStockDetails (stock: Stock) {
    this.stockDetailsClicked.emit(stock);
  }

  // Event Emiter used when filters are changed from dropdown
  stockFilterClicked: EventEmitter<String> = new EventEmitter<string>();
  
  // Method to emit filter details when filter is changed
  stockFilterChanged (filterVal: string) {
    this.stockFilterClicked.emit(filterVal);
  }

}

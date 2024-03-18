import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { ClrDatagridSortOrder } from '@clr/angular';
import { Stock } from '../interfaces';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit{
  
  stocks:Stock[] = [];
  ascSort = ClrDatagridSortOrder.ASC;
  alertText:string = "";
  alertType:string = "success";
  currFilter: string = '';

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.getAllStocks();
    
  }

  getAllStocks (): void {
    this.stockService.getStocks().subscribe({
      next: (res) => {
        this.stocks = res;
        this.stocks.map((item) => item.selected=false);
      },
      error: (err) => console.error(err),
      complete: () => {}
    });
  }

  deleteStock(stock:Stock): void {
    const stockId: number = stock.id;
    this.stockService.deleteStock(stockId).subscribe({
      next: (res) => {
        this.alertText = res["msg"];
        this.alertType = "success";
      }, 
      error: (error) => {
        this.alertText = error.error["msg"];
        this.alertType = "danger";
        console.error(error);
      },
      complete: () => {
        setTimeout(() => {
          this.onCloseAlert();
        }, 4000);
      }
    });
  }

  onCloseAlert(): void {
    this.alertText = "";
  }

  onMouseOverDelete (stock: Stock): void {
    stock.selected = true;
  }
  
  onMouseLeaveDelete (stock: Stock): void {
    stock.selected = false;
  }

  onShowStockDetails(stock: Stock): void {
  }


}

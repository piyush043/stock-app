import { Component, OnInit } from '@angular/core';
import { Stock } from '../interfaces';
import { StockService } from '../stock.service';

@Component({
  selector: 'stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit{
  
  stock: Stock = null;

  constructor(private stockService: StockService){}
  
  ngOnInit(): void {
    
    // Subscribe to stock selected event emitter
    this.stockService.stockDetailsClicked.subscribe({
      next: (res) => { this.stock = res},
      err: (err) => console.error(err)
    });

    // Subscribe to Stock deleted Subject
    this.stockService.callStockDeleted().subscribe({
      next: (data:number) => {
        if (data && this.stock && this.stock.id == data){
          this.close();
        }
      }
    });

    // Subscribe to Reset Data Subject
    this.stockService.callResetData().subscribe({
      next: (data:boolean) => {
        if (data){
          this.close();
        }
      }
    });
  }

  close() {
    this.stock = null;
  }
}

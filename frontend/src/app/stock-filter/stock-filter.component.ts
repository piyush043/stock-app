import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'stock-filter',
  templateUrl: './stock-filter.component.html',
  styleUrls: ['./stock-filter.component.css']
})
export class StockFilterComponent implements OnInit{
  constructor(private stockService:StockService){}

  filters: string[];
  currFilter: string = '';

  ngOnInit(): void {
    this.getFilters();
    
    // Subscribe to Stock deleted Subject
    this.stockService.callStockDeleted().subscribe({
      next: (data:number) => {
        if (data){
          this.getFilters();
        }
      }
    });

    // Subscribe to Reset Data Subject
    this.stockService.callResetData().subscribe({
      next: (data:boolean) => {
        if (data){
          this.getFilters();
        }
      }
    });
  }

  getFilters() {
    this.stockService.getFilterTags().subscribe( {
      next: (res) => {this.filters = res; console.log(res)},
      error: (err) => console.error("Error"),
      complete: () => {
        if (this.currFilter!='' && !this.filters.includes(this.currFilter)) {
          this.updateFilter('');
        }
      }
    });
  }

  updateFilter(val:string) {
    this.currFilter = val;
    this.stockService.stockFilterClicked.emit(this.currFilter);
  }
}

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
  _currFilter: string = '';

  get currFilter(): string{
    return this._currFilter;
  }

  set currFilter(val: string) {
    this._currFilter = val;
    this.updateFilter();
  }

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
      next: (res) => {this.filters = res;},
      error: (err) => console.error("Error"),
      complete: () => {
        if (this.currFilter!='' && !this.filters.includes(this.currFilter)) {
          this.resetFilter();
          
        }
      }
    });
  }

  resetFilter() {
    this.currFilter = '';
  }

  updateFilter() {
    this.stockService.stockFilterClicked.emit(this.currFilter);
  }
}

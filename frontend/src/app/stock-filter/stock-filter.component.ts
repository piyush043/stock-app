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

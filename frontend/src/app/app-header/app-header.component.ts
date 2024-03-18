import { Component } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  
  title: string = "Stock App";
  showModal: boolean = false;
  
  constructor(private stockService:StockService) {}

  resetAppData() {
    this.stockService.resetData().subscribe({
      next: (res) => {
        // Setting value for reset data subject, so that it can multi-cast to its subscribers. 
        this.stockService.setSubjectResetData(true);
      }, 
      error: (error) =>console.error(error),
      complete: () => this.hideShowModal()
    });
  }

  hideShowModal() {
    this.showModal = !this.showModal;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "@clr/angular";

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockFilterComponent } from './stock-filter/stock-filter.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockService } from './stock.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    StockListComponent,
    StockFilterComponent,
    StockDetailComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

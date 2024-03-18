import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

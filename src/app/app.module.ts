import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import {PermissionGuard} from 'app/guard/permission.guard';
import {FocusGuard} from 'app/guard/focus.guard';
import {StockResolve} from './guard/stock.resolve';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    BuyerListComponent,
    SellerListComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard,FocusGuard,StockResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }

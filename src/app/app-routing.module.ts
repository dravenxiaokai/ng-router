import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard} from 'app/guard/permission.guard';
import {FocusGuard} from './guard/focus.guard';
import {StockResolve} from './guard/stock.resolve';

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},/*'prefix'是以'xxx'开头的路由，重定向到'/home'*/
  {path: 'home',component:HomeComponent},
  {path: 'consult',component:ConsultComponent,outlet:'aux'},
  // {path: 'stock',component:StockComponent},
  // {path: 'stock/:id',component:StockComponent},
  {path: 'stock/:id',component:StockComponent,data:[{isPro:true}],children:[
    {path:'',component:BuyerListComponent},
    {path:'seller/:id',component:SellerListComponent}
  ],
    // canActivate:[PermissionGuard],
    // canDeactivate:[FocusGuard],
    resolve:{
      stock:StockResolve
    }
  },
  {path: '**',component:Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

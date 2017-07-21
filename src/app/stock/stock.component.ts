import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  // private stockId:number;
  private stock:Stock;

  private isPro:boolean;

  private focus:boolean = false;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    //在一个组件调用另一个组件时可以使用参数快照
    // this.stockId = this.routeInfo.snapshot.queryParams["id"]
    // this.stockId = this.routeInfo.snapshot.params["id"]
    //在一个组件调用它自身时不会触发ngOnInit，这时就要用参数订阅,如果还使用参数快照会出现问题
    // this.routeInfo.params.subscribe((params:Params) => this.stockId = params['id']);
    this.routeInfo.data.subscribe((data:{stock:Stock}) => {
      this.stock = data.stock;
    })
    this.isPro = this.routeInfo.snapshot.data[0]['isPro'];
  }

  isFocus(){
    return this.focus;
  }
}

export class Stock{
  constructor(public id:number,public name:string){

  }
}
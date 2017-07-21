import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  private sellerId:number;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params["id"];
  }

}

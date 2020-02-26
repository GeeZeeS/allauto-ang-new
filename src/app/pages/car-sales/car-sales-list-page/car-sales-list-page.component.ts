import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-car-sales-list-page',
  templateUrl: './car-sales-list-page.component.html',
  styleUrls: ['./car-sales-list-page.component.scss']
})

export class CarSalesListPageComponent implements OnInit {
  posts_count: string;
  pSub: Subscription;
  page: string = '1';
  car_condition: string = '';
  car_brand: string = '';
  car_model: string = '';
  car_body: string = '';
  car_fuel: string = '';
  ordering: string = '-id';
  orderSelect = ''

  params = new HttpParams()

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['page'] && params['page'] != '') {
        this.page = params['page'];
      }
      if (params['car_condition'] && params['car_condition'] != '') {
        this.car_condition = params['car_condition'];
      }
      if (params['car_brand'] && params['car_brand'] != '') {
        this.car_brand = params['car_brand'];
      }
      if (params['car_model'] && params['car_model'] != '') {
        this.car_model = params['car_model'];
      }
      if (params['car_body'] && params['car_body'] != '') {
        this.car_body = params['car_body'];
      }
      if (params['car_fuel'] && params['car_fuel'] != '') {
        this.car_fuel = params['car_fuel'];
      }
      if (params['ordering'] && params['ordering'] != '') {
        this.ordering = params['ordering'];
        this.orderSelect = this.ordering;
      }
    })
  }
  onOrderChange(event: any){
    this.ordering = event.target.value
  }

  getMessage(message: string) {
    this.posts_count = message;
  }

  ngOnInit(): void {
    this.orderSelect = this.ordering;
  }

}

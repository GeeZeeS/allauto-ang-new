import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarPost } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CarSalesService } from 'src/app/services/car_sales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-sales-list-page',
  templateUrl: './car-sales-list-page.component.html',
  styleUrls: ['./car-sales-list-page.component.scss']
})
export class CarSalesListPageComponent implements OnInit {

  pSub: Subscription;
  page: string = '1';
  car_condition: string = '';
  car_brand: string = '';
  car_model: string = '';
  car_body: string = '';
  car_fuel: string = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['page_number'] && params['page_number'] != ''){
        this.page = params['page_number'];
      }
      if(params['car_condition'] && params['car_condition'] != ''){
        this.car_condition = params['car_condition'];
      }
      if(params['car_brand'] && params['car_brand'] != ''){
        this.car_brand = params['car_brand'];
      }
      if(params['car_model'] && params['car_model'] != ''){
        this.car_model = params['car_model'];
      }
      if(params['car_body'] && params['car_body'] != ''){
        this.car_body = params['car_body'];
      }
      if(params['car_fuel'] && params['car_fuel'] != ''){
        this.car_fuel = params['car_fuel'];
      }
  })
}

ngOnInit(): void {

}

}

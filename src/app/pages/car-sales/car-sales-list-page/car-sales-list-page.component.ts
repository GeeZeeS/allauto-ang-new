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
  page: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['page_number'] && params['page_number'] > 1){
        this.page = params['page_number'];
        console.log(this.page);
      }
  })
}

ngOnInit(): void {

}

}

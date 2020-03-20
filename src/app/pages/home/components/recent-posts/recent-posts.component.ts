import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarPost, CarCondition, CarBody, CarBrand, CarModel } from '../../../../interfaces/interfaces';
import { CarSalesService } from 'src/app/services/car_sales.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})

export class RecentPostsComponent implements OnInit, OnDestroy {
  car_posts: CarPost[];
  // form: FormGroup;

  // car_condition: CarCondition;
  // car_body: CarBody;
  // car_brand: CarBrand;
  // car_model: CarModel;

  pSub: Subscription;

  constructor(
    private carSalesService: CarSalesService,
  ) { }
  ngOnInit() {
    this.getNewCarPosts('', '', '', '', '', '', '');
  }

  getNewCarPosts(
    id: string,
    car_condition: string,
    car_brand: string,
    car_model: string,
    car_body: string,
    car_fuel: string,
    user: string) {
    window.scroll(0, 0);
    this.pSub = this.carSalesService
      .getCarPostsFiltered(id, car_condition, car_brand, car_model, car_body, car_fuel, '1' ,user)
      .subscribe(posts => {
        this.car_posts = posts["results"];
      });
  };

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

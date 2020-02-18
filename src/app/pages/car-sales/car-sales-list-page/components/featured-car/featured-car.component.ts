import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarPost } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CarSalesService } from 'src/app/services/car_sales.service';

@Component({
  selector: 'app-featured-car',
  templateUrl: './featured-car.component.html',
  styleUrls: ['./featured-car.component.scss']
})
export class FeaturedCarComponent implements OnInit, OnDestroy {

  car_featured_posts: CarPost[];
  pSub: Subscription;

  constructor(
    private carSalesService: CarSalesService,
  ) { }

  ngOnInit(): void {
    this.getNewCarPosts('', '', '', '', '', '', '1', '');
  }

  getNewCarPosts(
    id: string,
    car_condition: string,
    car_brand: string,
    car_model: string,
    car_body: string,
    car_fuel: string,
    page: string,
    user: string) {
    window.scroll(0, 0);
    this.pSub = this.carSalesService
      .getCarPostsFiltered(id, car_condition, car_brand, car_model, car_body, car_fuel, page, user)
      .subscribe(posts => {
        this.car_featured_posts = posts["results"];
      });
  };

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

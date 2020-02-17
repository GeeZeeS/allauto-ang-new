import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CarPost } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CarSalesService } from 'src/app/services/car_sales.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-recent-cars-sales-list',
  templateUrl: './recent-cars-sales-list.component.html',
  styleUrls: ['./recent-cars-sales-list.component.scss']
})
export class RecentCarsSalesListComponent implements OnInit, OnDestroy {

  car_posts: CarPost[];
  pSub: Subscription;
  private page:number = 1;
  pages:number = 0;

  constructor(
    private carSalesService: CarSalesService
  ) { }

  ngOnInit(): void {
    this.getNewCarPosts('', '', '', '', '', '', this.page, '');
  }

  getNewCarPosts(
    id: string,
    car_condition: string,
    car_brand: string,
    car_model: string,
    car_body: string,
    car_fuel: string,
    page: number,
    user: string) {
    window.scroll(0, 0);
    this.pSub = this.carSalesService
      .getCarPostsFiltered(id, car_condition, car_brand, car_model, car_body, car_fuel, page, user)
      .subscribe(posts => {
        this.car_posts = posts["results"];
        var p = parseInt(posts['count'])
        var value = Math.floor(p / 10);
        if(value > 0){
          this.pages = value
        }
        else{
          this.pages = 1
        }
      });
  };

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

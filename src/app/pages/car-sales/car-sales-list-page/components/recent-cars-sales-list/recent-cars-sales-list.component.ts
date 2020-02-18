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
  @Input() page:string;
  @Input() car_condition:string;
  @Input() car_brand:string;
  @Input() car_model:string;
  @Input() car_body:string;
  @Input() car_fuel:string;
  pages:string;

  constructor(
    private carSalesService: CarSalesService
  ) { }

  ngOnInit(): void {
    this.getNewCarPosts(
      '', 
      this.car_condition, 
      this.car_brand, 
      this.car_model, 
      this.car_body, 
      this.car_fuel, 
      this.page, 
      '');
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
        this.car_posts = posts["results"];
        var p = parseInt(posts['count'])
        var value = Math.floor(p / 10);
        if(value > 0){
          this.pages = value.toString()
        }
        else{
          this.pages = '1'
        }
      });
  };

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

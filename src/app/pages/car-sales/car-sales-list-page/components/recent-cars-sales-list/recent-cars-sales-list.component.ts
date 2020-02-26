import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { CarPost } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CarSalesService } from 'src/app/services/car_sales.service';

@Component({
  selector: 'app-recent-cars-sales-list',
  templateUrl: './recent-cars-sales-list.component.html',
  styleUrls: ['./recent-cars-sales-list.component.scss']
})
export class RecentCarsSalesListComponent implements OnInit, OnDestroy, OnChanges{

  @Output() posts_count = new EventEmitter();
  car_posts: CarPost[];
  pSub: Subscription;
  @Input() page: string;
  @Input() car_condition: string;
  @Input() car_brand: string;
  @Input() car_model: string;
  @Input() car_body: string;
  @Input() car_fuel: string;
  @Input() ordering: string;
  pages: string;

  constructor(private carSalesService: CarSalesService) { }

  ngOnChanges(changes: SimpleChanges){
    if (changes.page) {
      this.page = changes.page.currentValue
    }
    if (changes.car_condition) {
      this.car_condition = changes.car_condition.currentValue
    }
    if (changes.car_brand) {
      this.car_brand = changes.car_brand.currentValue
    }
    if (changes.car_model) {
      this.car_model = changes.car_model.currentValue
    }
    if (changes.car_body) {
      this.car_body = changes.car_body.currentValue
    }
    if (changes.car_fuel) {
      this.car_fuel = changes.car_fuel.currentValue
    }
    if (changes.ordering) {
      this.ordering = changes.ordering.currentValue
    }
    this.getNewCarPosts(
      '',
      this.car_condition,
      this.car_brand,
      this.car_model,
      this.car_body,
      this.car_fuel,
      this.page,
      this.ordering
    )
  }

  ngOnInit(): void {
    this.getNewCarPosts(
      '',
      this.car_condition,
      this.car_brand,
      this.car_model,
      this.car_body,
      this.car_fuel,
      this.page,
      this.ordering
      );
  }

  getNewCarPosts(
    id: string,
    car_condition: string,
    car_brand: string,
    car_model: string,
    car_body: string,
    car_fuel: string,
    page: string,
    ordering: string
    ) {
    window.scroll(0, 0);
    this.pSub = this.carSalesService
      .getCarPostsFiltered(id, car_condition, car_brand, car_model, car_body, car_fuel, page, ordering)
      .subscribe(posts => {
        this.sendMessageToParent(posts["count"])
        this.car_posts = posts["results"];
        var p = parseInt(posts['count'])
        var value = Math.floor(p / 10);
        if (value > 0) {
          this.pages = value.toString()
        }
        else {
          this.pages = '1'
        }
      });
  };

  sendMessageToParent(message: string) {
    this.posts_count.emit(message)
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

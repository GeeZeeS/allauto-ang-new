import { Component, OnInit } from '@angular/core';
import { CarPost } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CarSalesService } from 'src/app/services/car_sales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-sales-page',
  templateUrl: './car-sales-page.component.html',
  styleUrls: ['./car-sales-page.component.scss']
})
export class CarSalesPageComponent implements OnInit {

  car_post: CarPost;
  pSub: Subscription;

  constructor(
    private carSalesService: CarSalesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getCarPost(this.id)
  }

  id = this.route.snapshot.paramMap.get("id");

  getCarPost(id){
    window.scroll(0, 0);
    this.pSub = this.carSalesService
      .getCarPosts(id)
      .subscribe(post => {
        this.car_post = post
        console.log(this.car_post)
      })
  }

}

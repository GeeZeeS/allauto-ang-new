import { Component, OnInit, Input } from '@angular/core';
import { Profile, CarPost } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CarSalesService } from 'src/app/services/car_sales.service';

@Component({
  selector: 'app-more-vehicles',
  templateUrl: './more-vehicles.component.html',
  styleUrls: ['./more-vehicles.component.scss']
})
export class MoreVehiclesComponent implements OnInit {
  @Input() user_info: Profile;
  pSub: Subscription;
  car_posts: CarPost[]

  constructor(private carSaleService: CarSalesService) { }

  ngOnInit(): void {
    this.getDealerInfo(+this.user_info.id)
  }

  getDealerInfo(user_id: number){
    this.pSub = this.carSaleService.getRandomByDealerUser(user_id)
    .subscribe(dealer => {
      this.car_posts = dealer['results']
      console.log(this.car_posts)
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

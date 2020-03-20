import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Profile, Dealer } from 'src/app/interfaces/interfaces';
import { DealerService } from 'src/app/services/dealer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dealer-user',
  templateUrl: './dealer-user.component.html',
  styleUrls: ['./dealer-user.component.scss']
})
export class DealerUserComponent implements OnInit, OnDestroy {

  @Input() user_info: Profile;
  dealer_info: Dealer;
  pSub: Subscription;

  constructor(
    private dealerService: DealerService
  ) { }

  ngOnInit(): void {
    this.getDealerInfo(+this.user_info.id)
  }

  getDealerInfo(user_id: number){
    this.pSub = this.dealerService.getDealerByUser(user_id)
    .subscribe(dealer => {
      this.dealer_info = dealer['results'][0]
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}

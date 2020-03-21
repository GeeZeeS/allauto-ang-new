import { Component, OnInit } from '@angular/core';
import { VinCheckService } from 'src/app/services/vin.services';

@Component({
  selector: 'app-recent-cheks',
  templateUrl: './recent-cheks.component.html',
  styleUrls: ['./recent-cheks.component.scss']
})
export class RecentCheksComponent implements OnInit {

  latest: any;

  constructor(private vinService: VinCheckService) { }

  ngOnInit(): void {
    this.vinService.getLatestChecks().subscribe(response => {
      this.latest = response['results']
    })
  }

}

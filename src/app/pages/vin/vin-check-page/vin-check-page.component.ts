import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VinCheckService } from 'src/app/services/vin.services';
import { VinCheck } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-vin-check-page',
  templateUrl: './vin-check-page.component.html',
  styleUrls: ['./vin-check-page.component.scss']
})
export class VinCheckPageComponent implements OnInit {
  form: FormGroup
  vin_info: any
  short_response: any

  constructor(private vinService: VinCheckService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      vin_number: new FormControl(null, [
        Validators.minLength(17)
      ])
    })
  }

  submit(){
    if(this.form.invalid){
      return
    }

    const vin: VinCheck = {
      vin_number: this.form.value.vin_number
    }

    this.vinService.getVinShortReport(vin).subscribe(response => {
      this.form.reset()
      this.vin_info = response['vin_report']
      this.short_response = response['vin_report'][6]
    })
  }

}

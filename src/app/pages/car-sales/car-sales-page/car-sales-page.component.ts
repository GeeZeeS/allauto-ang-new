import { Component, OnInit } from '@angular/core';
import { CarPost, Profile } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { CarSalesService } from 'src/app/services/car_sales.service';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-car-sales-page',
  templateUrl: './car-sales-page.component.html',
  styleUrls: ['./car-sales-page.component.scss']
})
export class CarSalesPageComponent implements OnInit {

  car_post: CarPost;
  is_dealer: false;
  user_info: Profile
  pSub: Subscription;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private carSalesService: CarSalesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: "100%",
        height: "450px",
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Fade,
        previewCloseOnClick: true, previewCloseOnEsc: true
      },
      {
        breakpoint: 300,
        imagePercent: 80,
        thumbnailsPercent: 10,
        thumbnailsMargin: 10,
        thumbnailMargin: 10
      },
      {
        breakpoint: 400,
      }
    ];
    this.getCarPost(this.id)
  }

  id = this.route.snapshot.paramMap.get("id");

  getCarPost(id){
    window.scroll(0, 0);
    this.pSub = this.carSalesService
      .getCarPosts(id)
      .subscribe(post => {
        this.car_post = post
        this.user_info = post['created_by']
        this.is_dealer = post['created_by']['is_dealer']
        let newImages = [];
        this.car_post['car_image'].forEach(image => {
          newImages.push({
            'small': 'http://localhost:8000' + image.image,
            'medium': 'http://localhost:8000' + image.image,
            'big': 'http://localhost:8000' + image.image,
          });
        });
        this.galleryImages = newImages;
      })
  }

}

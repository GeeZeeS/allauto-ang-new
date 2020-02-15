import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/authentication/login-page/login-page.component';
import { RegisterPageComponent } from './pages/authentication/register-page/register-page.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page.component';
import { CarSalesPageComponent } from './pages/car-sales/car-sales-page/car-sales-page.component';
import { ProfilePageComponent } from './pages/user/profile-page/profile-page.component';
import { BlogListPageComponent } from './pages/blog/blog-list-page/blog-list-page.component';
import { CarSalesListPageComponent } from './pages/car-sales/car-sales-list-page/car-sales-list-page.component';
import { CarSalesEditPageComponent } from './pages/car-sales/car-sales-edit-page/car-sales-edit-page.component';
import { VinCheckPageComponent } from './pages/vin/vin-check-page/vin-check-page.component';
import { FilterComponent } from './pages/home/components/filter/filter.component';
import { RecentPostsComponent } from './pages/home/components/recent-posts/recent-posts.component';
import { RecommendedPostsComponent } from './pages/home/components/recommended-posts/recommended-posts.component';
import { MostPopularBrandsComponent } from './pages/home/components/most-popular-brands/most-popular-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BlogPageComponent,
    CarSalesPageComponent,
    ProfilePageComponent,
    BlogListPageComponent,
    CarSalesListPageComponent,
    CarSalesEditPageComponent,
    VinCheckPageComponent,
    FilterComponent,
    RecentPostsComponent,
    RecommendedPostsComponent,
    MostPopularBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

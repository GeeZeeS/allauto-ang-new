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
import { RecentPostsComponent } from './pages/home/components/recent-posts/recent-posts.component';
import { RecommendedPostsComponent } from './pages/home/components/recommended-posts/recommended-posts.component';
import { MostPopularBrandsComponent } from './pages/home/components/most-popular-brands/most-popular-brands.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { HomeFilterComponent } from './pages/home/components/home-filter/home-filter.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    HomeFilterComponent,
    BlogPageComponent,
    CarSalesPageComponent,
    ProfilePageComponent,
    BlogListPageComponent,
    CarSalesListPageComponent,
    CarSalesEditPageComponent,
    VinCheckPageComponent,
    RecentPostsComponent,
    RecommendedPostsComponent,
    MostPopularBrandsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

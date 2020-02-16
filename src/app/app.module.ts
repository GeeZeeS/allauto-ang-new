import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './modules/shared.module';
import { AuthService } from './services/auth.service';
import { CarSalesService } from './services/car_sales.service';

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
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { RecentBlogPostsComponent } from './pages/home/components/recent-blog-posts/recent-blog-posts.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    // Main Layout
    MainLayoutComponent,
    NavbarComponent,
    FooterComponent,
    // Authentication
    LoginPageComponent,
    RegisterPageComponent,
    // Home
    HomePageComponent,
    HomeFilterComponent,
    RecentPostsComponent,
    RecommendedPostsComponent,
    MostPopularBrandsComponent,
    RecentBlogPostsComponent,
    // Blog
    BlogPageComponent,
    BlogListPageComponent,
    // Car Sales
    CarSalesPageComponent,
    CarSalesListPageComponent,
    CarSalesEditPageComponent,
    // User
    ProfilePageComponent,
    // Vin Check
    VinCheckPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, AuthGuard, CarSalesService, BlogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LoginPageComponent } from './pages/authentication/login-page/login-page.component';
import { RegisterPageComponent } from './pages/authentication/register-page/register-page.component';
import { ProfilePageComponent } from './pages/user/profile-page/profile-page.component';
import { BlogListPageComponent } from './pages/blog/blog-list-page/blog-list-page.component';
import { CarSalesListPageComponent } from './pages/car-sales/car-sales-list-page/car-sales-list-page.component';
import { CarSalesEditPageComponent } from './pages/car-sales/car-sales-edit-page/car-sales-edit-page.component';
import { VinCheckPageComponent } from './pages/vin/vin-check-page/vin-check-page.component';
import { CarSalesPageComponent } from './pages/car-sales/car-sales-page/car-sales-page.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: HomePageComponent },
      // Authentication
      { path: 'signin', component: LoginPageComponent },
      { path: 'signup', component: RegisterPageComponent },
      // Profile
      { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]  },
      // Car Sales
      { path: 'car-sales', component: CarSalesListPageComponent },
      { path: 'car-sales/:id/view', component: CarSalesPageComponent },
      { path: 'car-sales/create', component: CarSalesEditPageComponent, canActivate: [AuthGuard] },
      { path: 'car-sales/:id/edit', component: CarSalesEditPageComponent, canActivate: [AuthGuard]  },
      { path: 'car-sales/:id/delete', component: CarSalesEditPageComponent, canActivate: [AuthGuard]  },
      // Vin Check
      { path: 'check-vin', component: VinCheckPageComponent },
      // Blog
      { path: 'blog', component: BlogListPageComponent },
      { path: 'blog/:id/view', component: BlogPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

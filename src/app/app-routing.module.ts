import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full'},
      { path: '', component: HomePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

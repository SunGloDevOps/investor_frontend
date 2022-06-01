import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './views/dashboard/dashboard-routing.module';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthenticationRoutingModule } from './views/authentication/authentication-routing.module';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/views/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'app',
    loadChildren: () => import('../app/views/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardRoutingModule,
    AuthenticationRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

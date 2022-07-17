import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from '../app/shared/shared.module';
import { ForgotpasswordComponent } from './views/authentication/forgotpassword/forgotpassword.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { JwtModule, JwtHelperService, JwtModuleOptions } from '@auth0/angular-jwt';
import { api_home_url } from 'src/environments/environment';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [api_home_url],
      },
    }),
  ],
  providers: [JwtHelperService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from '../app/shared/shared.module';
import { ForgotpasswordComponent } from './views/authentication/forgotpassword/forgotpassword.component';
import { FaqsComponent } from './views/faqs/faqs.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

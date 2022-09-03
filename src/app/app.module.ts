import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from '../app/shared/shared.module';
import { FaqsComponent } from './views/faqs/faqs.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogsComponent } from './views/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqsComponent,
    ProjectsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

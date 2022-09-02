import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BlogComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

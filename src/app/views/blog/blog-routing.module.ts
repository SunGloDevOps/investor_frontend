import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from 'src/app/shared/components/layouts/mainlayout/mainlayout.component';
import { BlogComponent } from 'src/app/views/blog/blog/blog.component';
import { BlogsComponent } from 'src/app/views/blogs/blogs.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'blogs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: BlogsComponent
      },
      {
        path: ':id',
        component: BlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

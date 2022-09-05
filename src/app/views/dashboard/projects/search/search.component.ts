import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProject from 'src/app/models/Projects/IProject';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  projects: IProject[] = [];

  //page loading status
  pageLoading: boolean = false;

  //users detail
  user?: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    this.pageLoading = true;
    this.user = this.userService.getUser()
    this.searchProjects(this.user.id, this.route.snapshot.params['keyword'])
  }

   //search projects 
   searchProjects(user: string, keyword: string){
    this.projectService.searchProject(user, keyword).subscribe(
      res => {
        this.projects = res.data
        this.pageLoading = false
      }
    )

    this.pageLoading = false;
  }

}

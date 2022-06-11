import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { TokenService } from 'src/app/services/token/token.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
   
  ];

  user_id?: string;

  constructor(
    private projectService: ProjectsService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.user_id = this.userService.user_id;
  }

  getProjects(): void {
    this.projectService.getAllProject().subscribe(
      res => {
        if(res.status === 200) {
          this.projects = res.data
        }
      }
    )
  }

}

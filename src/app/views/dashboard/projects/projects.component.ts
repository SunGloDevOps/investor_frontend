import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
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

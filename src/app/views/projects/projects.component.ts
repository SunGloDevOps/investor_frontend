import { Component, OnInit } from '@angular/core';
import IProjects from 'src/app/models/Projects/IProject';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  //now available projects
  availableProjects: IProjects[] = []

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {
    this.projectService.getAllProject().subscribe(
      res => {
        res.data.map((project: any) => {
          if(project.availability === "Now Available"){
            this.availableProjects.push(project)
          }
        })
      }
    );
  }

}

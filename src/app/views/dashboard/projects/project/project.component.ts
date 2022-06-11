import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: any = {}

  projectsoldpercentage: number = 0;

  constructor(
    private projectService: ProjectsService,
  ) { }

  ngOnInit(): void {
    this.getProjectData()
  }

  getProjectData(): void {
    this.projectService.getProject("").subscribe(
      res => {
        if(res.status === 200) {
          this.project = res.data;
          this.projectsoldpercentage = this.soldProjectPercentage(res.data.sold_cell, res.data.total_cell);
        }
      }
    );
  }

  soldProjectPercentage(sold: number, total: number): number {
    return (sold/total)*100
  }

  downloadInformation(): void {

  }

}

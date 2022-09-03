import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  investments: any[] = [];

  //page loading status
  pageLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private investmentService: InvestmentService
  ) { }

  ngOnInit(): void {
    this.pageLoading = true;
    this.searchProjects(this.route.snapshot.params['keyword'])
  }

  //search projects 
  searchProjects(keyword: string){
    this.investmentService.searchInvestments(keyword).subscribe(
      res => {
        this.investments = res.data
        this.pageLoading = false
      }
    )

    this.pageLoading = false;
  }

}

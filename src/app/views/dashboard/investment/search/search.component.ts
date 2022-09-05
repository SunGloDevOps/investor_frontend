import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  investments: any[] = [];

  //page loading status
  pageLoading: boolean = false;

  //user details
  user?: any;

  constructor(
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    this.pageLoading = true;
    this.user = this.userService.getUser();
    this.searchProjects(this.user.id, this.route.snapshot.params['keyword'])
  }

  //search projects 
  searchProjects(user: string, keyword: string){
    this.investmentService.searchInvestments(user, keyword).subscribe(
      res => {
        console.log(res)
        this.investments = res.data
        this.pageLoading = false
      }
    )

    this.pageLoading = false;
  }

}

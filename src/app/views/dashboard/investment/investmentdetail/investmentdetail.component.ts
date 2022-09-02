import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';

@Component({
  selector: 'app-investmentdetail',
  templateUrl: './investmentdetail.component.html',
  styleUrls: ['./investmentdetail.component.css']
})
export class InvestmentdetailComponent implements OnInit {

  investment?: any;

  days_left: number = 0;

  progress: number = 0;

  showShareModal: boolean = false;

  //page loading status
  pageLoading: boolean = false;

  constructor(
    private investmentService: InvestmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.pageLoading = true;

    this.getInvestment()

  }

  getInvestment() {

    const id = this.route.snapshot.params['id']

    this.investmentService.viewInvestment(id).subscribe(
      res => {
        this.investment = res.data;
        this.pageLoading = false
      }
    )
  }

  openShareModal(): void {
    this.showShareModal = true
  }

  closeShareModal(data: boolean): void {
    this.showShareModal = data
  }

  async reInvest(){
    this.router.navigate(['app/projects/home', this.investment.project._id])
  }

}

import { Component, OnInit } from '@angular/core';
import { InvestmentService } from 'src/app/services/investment/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  constructor(
    private investmentService: InvestmentService
  ) { }

  ngOnInit(): void {
    
  }

  getInvestments(): void {
    // this.investmentService.getInvestments().subscribe()
  }

}

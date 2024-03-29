import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/Projects/IProject';
import { InvestmentService } from 'src/app/repositories/investment/investment.service';
import { ProjectsService } from 'src/app/repositories/projects/projects.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';
import { dollarToNaira } from 'src/app/utils/CurrencyConverter';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: IProject = {
    sold_cell: 0,
    ROI: '',
    carbon_reduced: 0,
    energy_yeild: 0,
    end_date: '',
    no_of_investors: '',
    start_date: '',
    operator: '',
    total_cell: 0,
    _id: '',
    title: '',
    description: '',
    cost_per_cell: '',
    thumbnail: '',
    availability: ''
  };

  //number of avaible cells to  buy
  available_cells?: number;

  //crypto loading status
  cryptoLoading: boolean = false

  //bank loading status
  bankLoading: boolean = false

  //page loading status
  pageLoading: boolean = false

  //text showing for cost per cell
  cost: string = "";

  //text to show when end date isn't set
  pending: string = "Not Started"

  projectsoldpercentage: number = 0;

  number_of_cell: number = 1;

  price_per_cell: number = 0;

  showinvestModal: boolean = false;

  showSuccessModal: boolean = false;

  showInsufficientModal: boolean = false;

  transactionStatus: boolean = false;

  user?: any;

  right_link: string[] = ['/investments',this.project._id]

  constructor(
    private projectService: ProjectsService,
    private userRepository: UsersRepository,
    private investment: InvestmentService,
    private route: ActivatedRoute,
    private scroller: ViewportScroller,
  ) { }

  ngOnInit(): void {
    this.getProjectData()
    this.user = this.userRepository.getUser()
    this.pageLoading = true
  }

  //get all project data from server
  getProjectData(): void {
    this.projectService.getProject(this.route.snapshot.params['id']).subscribe(
      res => {
          this.project = res.data;
          this.project.end_date = res.data.end_date ? res.data.end_date : this.pending
          this.price_per_cell = res.data.cost_per_cell;
          this.cost = "USD " + res.data.cost_per_cell + "/ NGN " + dollarToNaira(res.data.cost_per_cell);
          this.projectsoldpercentage = this.soldProjectPercentage(res.data.sold_cell, res.data.total_cell);
          this.available_cells = this.project.total_cell - this.project.sold_cell
          this.pageLoading = false
      }
    );
  }

  //calculating percentage of sold projects
  soldProjectPercentage(sold: number, total: number): number {
    return (sold/total)*100
  }

  //download information for porject
  downloadInformation(): void {

  }

  //getting number of cell from the counter
  getpurchasedCells(amount: number){
    this.number_of_cell = amount
  }

  closeInvestModal(data: boolean): void {
    this.showinvestModal = data
  }

  openInvestModal(): void {
    this.showinvestModal = true
  }

  bankTransactionStatus(value: boolean){
    this.bankLoading= true
    this.transactionStatus = value;
    const payload = {
      user: this.user.id,
      project: this.route.snapshot.params['id'],
      total_cells: this.number_of_cell,
      amount: (this.number_of_cell * this.price_per_cell),
      method: "BANK"
    }

    if(this.transactionStatus===false){
      this.closeInvestModal(false)
      this.bankLoading = false
      this.openInsufficientModal()
    }else{

    this.investment.invest(this.project._id, payload).subscribe(
      res => {
        console.log(res)
        if(res.status === 200){
          this.bankLoading = false
          this.closeInvestModal(false)
          this.openSuccessModal()
        } 
      }
    );
    }
  }

  cryptoTransactionStatus(value: boolean){
    this.cryptoLoading = true;
    this.transactionStatus = value;

    const payload = {
      user: this.user.id,
      project: this.route.snapshot.params['id'],
      total_cells: this.number_of_cell,
      amount: (this.number_of_cell * this.price_per_cell),
      method: "CRYPTO"
    }

    if(this.transactionStatus===false){
      this.closeInvestModal(false)
      this.cryptoLoading = false
      this.openInsufficientModal()
    }else{

    this.investment.invest(this.project._id, payload).subscribe(
      res => {
       
        if(res.status === 200){
          this.cryptoLoading = false
          this.closeInvestModal(false)
          this.openSuccessModal()
        } 
      }
    );
    }
  }

  closeSuccessModal(data: boolean): void {
    this.showSuccessModal = data
  }

  openSuccessModal(): void {
    this.showSuccessModal = true
  }

  closeInsufficientModal(data: boolean): void {
    this.showInsufficientModal = data
  }

  openInsufficientModal(): void {
    this.showInsufficientModal = true
  }

  scrollToAbout(){
    this.scroller.scrollToAnchor("about");
  }

}

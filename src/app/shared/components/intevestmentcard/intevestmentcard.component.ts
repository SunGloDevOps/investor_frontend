import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intevestmentcard',
  templateUrl: './intevestmentcard.component.html',
  styleUrls: ['./intevestmentcard.component.css']
})
export class IntevestmentcardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails(){
    this.router.navigate(['i']);
  }

}

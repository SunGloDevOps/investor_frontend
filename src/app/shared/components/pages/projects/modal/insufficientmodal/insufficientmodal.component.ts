import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insufficientmodal',
  templateUrl: './insufficientmodal.component.html',
  styleUrls: ['./insufficientmodal.component.css']
})
export class InsufficientmodalComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  fundWallet(){
    this.router.navigate(['/wallet/home'])
  }


}

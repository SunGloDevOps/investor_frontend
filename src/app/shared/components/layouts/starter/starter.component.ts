import { Component, OnInit } from '@angular/core';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  user: any = {}

  constructor(
  ) { }

  ngOnInit(): void {
    
  }


}

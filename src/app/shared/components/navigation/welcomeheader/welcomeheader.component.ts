import { Component, OnInit, Input } from '@angular/core';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-welcomeheader',
  templateUrl: './welcomeheader.component.html',
  styleUrls: ['./welcomeheader.component.css']
})
export class WelcomeheaderComponent implements OnInit {

  @Input() showSalution: boolean = false;

  showModal: boolean = false;

  user?: any;

  constructor(
    private userRepo: UsersRepository
  ) { }

  ngOnInit(): void {
    this.user = this.userRepo.getUser();
  }

  toggleModal(value: boolean){
    this.showModal = value
  }

}

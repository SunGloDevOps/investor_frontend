import { Component, OnInit } from '@angular/core';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: AuthRepository
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout()
  }

}

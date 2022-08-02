import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/repositories/notification/notification.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  activeTitle: number = 0;

  titleIndexes: number[] = [];

  showGeneral: boolean = true;

  showImportant: boolean = false;

  @Input() generalCount: number = 0;

  @Input() personalCount: number = 0;

  @Input() generals: any[] = []

  @Input() personals: any[] = []


  @Input() tabTitle: string[] = [];

  @Input() tabItems: string[][] = [];

  user?: any;

  constructor(
    private notification: NotificationService,
    private userRepo: UsersRepository
  ) { }

  ngOnInit(): void {
  this.tabTitle.map((e, i): void => {this.titleIndexes[i]=i})
  
    this.user = this.userRepo.getUser()
    this.notification.readNotification(this.user.id, "General").subscribe()
    this.generalCount = 0;
  }

  showActive(i: any){

  }

  showGeneralTab(): void{
    this.showImportant = false;
    this.showGeneral = true;
    
  }

  showImportantTab(): void{
    this.showImportant = true;
    this.showGeneral = false;
    this.notification.readNotification(this.user.id, "Personal").subscribe()
    this.personalCount = 0
  }

}



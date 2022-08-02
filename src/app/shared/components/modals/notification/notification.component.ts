import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/repositories/notification/notification.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() showNotification: boolean = false;

  user: any = {};

  notifications: any[] = []

  general: any[] = []

  personal: any[] = []

  unreadGeneral: number = 0;

  unreadPersonal: number = 0;

  constructor(
    private userService: UsersRepository,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
     //get user id from token
     this.user = this.userService.getUser()

     this.getNotifications()
    
     
  }

  closeModal(){
    this.showNotification = false;
  }

  getNotifications(){
    this.notification.getNotifications(this.user.id).subscribe(
      res => {
        this.general = res.data.filter((data: any)=>{return data.type==="General"})
        this.personal = res.data.filter((data: any)=>{return data.type==="Personal"})
        
        const unread = this.general.filter((data: any)=>{return data.status===false})
        this.unreadGeneral = unread.length;

        const unreadP = this.personal.filter((data: any)=>{return data.status===false})
        this.unreadPersonal = unreadP.length;
      }
    )
  }
 

}

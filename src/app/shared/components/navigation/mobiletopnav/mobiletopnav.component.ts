import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/repositories/notification/notification.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-mobiletopnav',
  templateUrl: './mobiletopnav.component.html',
  styleUrls: ['./mobiletopnav.component.css']
})
export class MobiletopnavComponent implements OnInit {

  showModal: boolean = false;

  notificationStatus?: boolean;

  user?: any;

  constructor(
    private notification: NotificationService,
    private userRepo: UsersRepository
  ) { }

  ngOnInit(): void {
    this.user = this.userRepo.getUser()
    this.getNotifications()
  }

  toggleModal(){
    if(this.showModal){
      this.showModal = false
    }else{
      this.showModal = true
    }
  }

  getNotifications(): void{
    this.notification.getNotifications(this.user.id).subscribe(
      res => {
        
        const unread = res.data.filter((data: any)=>{return data.status === false})

        if(unread.length > 0){
          this.notificationStatus = true
        }else {
          this.notificationStatus = false
        }

      }
    )
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from 'src/app/repositories/notification/notification.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';


@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.css']
})
export class BellComponent implements OnInit {

  notificationStatus?: boolean;

  user?: any;

  @Output() toggleModal = new EventEmitter<boolean>()

  showModal: boolean = false;

  constructor(
    private notification: NotificationService,
    private userRepo: UsersRepository
  ) { }

  ngOnInit(): void {
    this.user = this.userRepo.getUser()
    this.getNotifications()
  }

  toggle() {
    if(this.showModal){
      this.showModal = false
      this.toggleModal.emit(false)
    }else{
      this.showModal = true
      this.toggleModal.emit(true)
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

import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersRepository } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService implements OnInit {

  isKYCVerified?: boolean;

  isPhoneVerified?: boolean;

  isEmailVerified?: boolean;

  user: any = {}

  user_id?: string;

  constructor(
    private userService: UsersRepository
  ) { }

  ngOnInit(): void {
    this.getUserSettings()
    // this.user_id = this.userService.getUser().id;
  }

  getUserSettings(): void {

    const id = this.user_id ? this.user_id : ""

    this.user = this.userService.getUserDetails(id).subscribe(
      res => {
        const data = res.data;
        // this.isKYCVerified = data.bvn_verified;
        // this.isPhoneVerified = data.phone_verified;
        // this.isEmailVerified = data.email_verified;
      }
    )
  }

  getBVNStatus(): boolean {
    return this.isKYCVerified ? true : false
  }

  getPhoneStatus(): boolean {
    return this.isPhoneVerified ? true : false
  }

  getEmailStatus(): boolean {
    return this.isEmailVerified ? true : false
  }

  verifyBVN(): void {

    const id = this.user_id ? this.user_id : ""

    const payload = {
      bvn_verified : true
    }

    // this.userService.updateProfile(id, payload).subscribe(
    //   res => {
    //     if(res.status === 200){
    //       window.location.reload()
    //     }
    //   }
    // )
  }

  verifyEmail(): void {

    const id = this.user_id ? this.user_id : ""

    const payload = {
      bvn_verified : true
    }

    // this.userService.updateProfile(id, payload).subscribe(
    //   res => {
    //     if(res.status === 200){
    //       window.location.reload()
    //     }
    //   }
    // )
  }

  verifyPhone(): void {

    const id = this.user_id ? this.user_id : ""

    const payload = {
      bvn_verified : true
    }

    // this.userService.updateProfile(id, payload).subscribe(
    //   res => {
    //     if(res.status === 200){
    //       window.location.reload()
    //     }
    //   }
    // )
  }



  changePassword(password: string): void {

    const id = this.user_id ? this.user_id : ""

    const payload = {
      password: password
    }

    // this.userService.updateProfile(id, payload).subscribe(
    //   res => {
    //     if(res.status === 200){
    //       window.location.reload()
    //     }
    //   }
    // )
  }

  updateKinDetails(details: any): void {

    const id = this.user_id ? this.user_id : ""

    const payload = {
      next_of_kin_fullname: details.fullname,
      next_of_kin_phone: details.phone,
      next_of_kin_email: details.email,
      next_of_kin_address: details.address
    }

    // this.userService.updateProfile(id, payload).subscribe(
    //   res => {
    //     if(res.status === 200){
    //       window.location.reload()
    //     }
    //   }
    // )
  }


}

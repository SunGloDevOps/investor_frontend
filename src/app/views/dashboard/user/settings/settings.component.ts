import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';
import { SettingService } from 'src/app/repositories/settings/setting.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  //handles page loading 
  pageLoading: boolean = false

  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isBVNVerified?: boolean;

  isNextkinEdited: boolean = false

  isChangedPasswordEdited: boolean = false

  user: any = {};

  nextkinForm = this.fb.group({
    fullname: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required]
  })

  changePassword = this.fb.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  nextkinFromSubcription?: Subscription
  changepasswordFormSubscription?: Subscription

  constructor(
    private fb: FormBuilder,
    private settingService: SettingService,
    private authRepository: AuthRepository,
    private usersRepository: UsersRepository
  ) { }

  ngOnInit(): void {

    //starting page loaders
    this.pageLoading = false

    this.user = this.usersRepository.getUser()

    this.getEmailStatus();
    this.getPhoneStatus();

    this.usersRepository.getNextKin(this.user.id).subscribe(
      res => {
        this.nextkinForm.setValue({
          fullname: res.data.next_of_kin_fullname,
          phone: res.data.next_of_kin_phone,
          email: res.data.next_of_kin_email,
          address: res.data.next_of_kin_address
        })
      }
    )

    this.nextkinForm.valueChanges.subscribe(res => {
      this.isNextkinEdited = true
    })

    this.changePassword.valueChanges.subscribe(res => {
      if(this.changePassword.controls['password'].value === this.changePassword.controls['confirmPassword'].value){
        this.isChangedPasswordEdited = true
      }else{
        this.isChangedPasswordEdited = false
      }
    })

  
  }

  verifyEmail(): void {
    this.settingService.verifyEmail()
  }

  verifyPhone(): void {
    this.settingService.verifyPhone();
  }

  getPhoneStatus(): void {
    this.isPhoneVerified = this.settingService.getPhoneStatus();
  }

  getEmailStatus(): void {
    this.isEmailVerified = this.settingService.getEmailStatus();
  }

  submit(): void{
    if(this.isNextkinEdited){
      const payload = {
        next_of_kin_fullname: this.nextkinForm.controls['fullname'].value,
        next_of_kin_phone: this.nextkinForm.controls['phone'].value,
        next_of_kin_email: this.nextkinForm.controls['email'].value,
        next_of_kin_address: this.nextkinForm.controls['address'].value
      }
      this.usersRepository.updateNextKin(this.user.id, payload).subscribe(
        res => {
          if(res.status === 200){

          }

          if(res.status === 500){

          }
        }
      )
    }

    if(this.isChangedPasswordEdited){
      const payload = {
        id: this.user.id,
        password: this.changePassword.controls['password'].value
      }
      this.authRepository.changePassword(payload).subscribe(
        res => {
          if(res.status === 200){

          }

          if(res.status === 500){
            
          }
        }
      )
    }
  }

}

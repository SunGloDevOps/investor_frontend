import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token/token.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    state: ['', Validators.required],
    address: ['', Validators.required]
  })

  user: any = {};

  constructor(
    private userService: UsersService,
    private tokenService: TokenService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    //get user id from token
    this.user = this.tokenService.getTokenBody();
    
    if(this.user !== null){
      this.getUserDetails(this.user.id);
    }
    
  }

  getUserDetails(id: string): void {
    this.userService.getUserDetails(id).subscribe(
      res => {
        if(res.status === 200) {
          
          this.profileForm.setValue({
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            email: res.data.email,
            phone: res.data.phone,
            country: res.data.country === null ? '': res.data.country,
            city: res.data.city  === null ? '': res.data.city,
            address: res.data.address
          })
        }
      }
    );
  }

  updateProfile(): void {

    const id: string = this.user.id
    const payload = this.profileForm.value;

    this.userService.updateProfile(id, payload).subscribe(
      res => {
          if(res.status === 200){
            window.location.reload();
          }
      }
    )
  }

}

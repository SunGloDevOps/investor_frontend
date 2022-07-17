import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import IProfileRequest from 'src/app/models/Users/IProfileRequest';
import { LocationService } from 'src/app/repositories/location/location.service';
import { TokenService } from 'src/app/repositories/token/token.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  isUpdated: boolean = false;

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    address: ['', Validators.required]
  })

  user: any = {};

  countries: any[] = [];

  constructor(
    private userService: UsersRepository,
    private tokenService: TokenService,
    private locationService: LocationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    //get user id from token
    this.user = this.userService.getUser()

    this.getCountry()
    
    if(this.user !== null){
      this.getUserDetails(this.user.id);
    }
    
  }

  getCountry(){
    this.locationService.getCountries().subscribe(
      res => {
        this.countries = res
      }
    )
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
            address: res.data.address === null ? '' : res.data.address
          })

        }
      }
    );
  }

  updateProfile(): void {

    const id: string = this.user.id
    const payload: IProfileRequest = this.profileForm.value;

    this.userService.updateProfile(id, payload).subscribe(
      res => {
          if(res.status === 200){
            this.isUpdated = true;
          }
      }
    )
  }

}

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

  //page loading status
  pageLoading: boolean = false;

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

  //variable to store countries data
  countries: any[] = [];

  //variable to store states of selectd country
  states: any[] = [];

  //selected country
  selectedCountry: string = 'NG';

  //selected state
  selectedState!: string;

  constructor(
    private userService: UsersRepository,
    private tokenService: TokenService,
    private locationService: LocationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    //starting page loader
    this.pageLoading = true

    //get user id from token
    this.user = this.userService.getUser()

    this.getCountry()
    
    if(this.user !== null){
      this.getUserDetails(this.user.id);
    }

  }

  //this function fetches all country data
  getCountry(){
    this.locationService.getCountry().subscribe(
      res => {
        this.countries = res;
      }
    )
  }

  //this function fetches all states belonging to the selected country
  onCountrySelected(countryIso: any){
    this.locationService.getStateOfSelectedCountry(countryIso).subscribe(
      res => {
        this.states = res;
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
            address: res.data.address ? res.data.address : "",
            country: res.data.country ? res.data.country : "",
            city: res.data.city ? res.data.city : "",
          })
        }
        this.pageLoading = false
      }
    );
  }

  updateProfile(): void {
    this.isUpdated = false;
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

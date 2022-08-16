import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import IChangepasswordRequest from 'src/app/models/Users/IChangepasswordRequest';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordMatch: boolean = false;

  passwordChanged: boolean = false;
  
  isLoading: boolean = false;

  changepasswordForm = this.fb.group({
    password: ['', Validators.required],
    password2: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private userRepository: AuthRepository,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async changePassword(): Promise<void> {

    this.isLoading = true;

    if(this.changepasswordForm.controls['password'].value !== this.changepasswordForm.controls['password2'].value){
      this.passwordMatch = true;
      this.isLoading = false;
      return
    }

    const payload: IChangepasswordRequest = {
      id: this.route.snapshot.params["id"],
      password: this.changepasswordForm.controls['password'].value,
    };

    (await this.userRepository.changePassword(payload)).subscribe(
      res => {
        if(res.status === 200) {
          this.passwordChanged = true
          this.isLoading = false
        }

        if(res.status === 500) {
          this.isLoading = false
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IChangepasswordRequest from 'src/app/models/Users/IChangepasswordRequest';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordMatch: boolean = false

  registerForm = this.fb.group({
    password: ['', Validators.required],
    password2: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private userRepository: UsersRepository,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async changePassword(): Promise<void> {
    if(this.registerForm.controls['password'].value !== this.registerForm.controls['password2'].value){
      this.passwordMatch = true;
      return
    }

    const payload: IChangepasswordRequest = {
      password: this.registerForm.controls['password'].value,
    };

    (await this.userRepository.changePassword(payload)).subscribe(
      res => {
        if(res.status === 200) {
          this.router.navigate(['/auth/login']);
        }

        if(res.status === 500) {

        }
      }
    )
  }

}

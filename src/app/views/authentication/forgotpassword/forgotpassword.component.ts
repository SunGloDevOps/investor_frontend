import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IForgotpasswordRequest } from 'src/app/models/Index';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm = this.fb.group({
    email: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private authRepository: AuthRepository,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async submit(){
    const payload: IForgotpasswordRequest = {
      email: this.forgotpasswordForm.controls['email'].value,
    };

    (await this.authRepository.forgotpassword(payload)).subscribe(
      res => {
        if(res.status === 200) {
          this.router.navigate(['/auth/changepassword']);
        }

        if(res.status === 500) {

        }

        if(res.status === 401){
          // when user already exists
        }
      }
    )
  }

}

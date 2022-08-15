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

  emailExist: boolean = false;

  //checking if request is loading
  isLoading: boolean = false;

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
    this.isLoading = true;

    const payload: IForgotpasswordRequest = {
      email: this.forgotpasswordForm.controls['email'].value,
    };

    (await this.authRepository.forgotpassword(payload)).subscribe(
      res => {
        if(res.status === 200) {
          this.router.navigate(['/auth/changepassword', res.data._id]);
        }

        if(res.status === 500) {
          this.isLoading = false
        }

        if(res.status === 404){
          // when user already exists
          this.emailExist = true;
          this.isLoading = false
        }
      }
    )
  }

}

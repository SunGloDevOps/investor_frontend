import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRequest, ILoginResponse } from 'src/app/models/Index';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';
import { TokenService } from 'src/app/repositories/token/token.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inValidDetails: boolean = false;

  //returns true when user takes recaptcha test
  notRobot: boolean = false;

  //handles api reuest status
  isLoading: boolean = false

  loginForm = this.fb.group({
    email: [ ' ', Validators.required ],
    password: [ ' ', Validators.required ],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authRepository: AuthRepository,
    private tokenService: TokenService,
    private userRepository: UsersRepository
    ) { }

  ngOnInit(): void {
  }

   async login(): Promise<void>{
    this.isLoading = true;
    const email: string = this.loginForm.controls['email'].value;
    const password: string = this.loginForm.controls['password'].value;

    const payload: ILoginRequest = {
      email: email,
      password: password
    }


    this.authRepository.login(payload).subscribe(
      (data: ILoginResponse) =>{
       
        if(data.status === 401 || data.status === 500){
          this.inValidDetails = true;
          this.isLoading = false;
        }
  
        if(data.status === 200){
       
          this.userRepository.setUser({
            id: data.data.id,
            firstname: data.data.firstname,
            email: data.data.email
          })

          this.tokenService.save(data.data.token)

          this.router.navigate(['/dashboard'])
          
        }
        else{

        }
      },
      error => {
        console.log(error)
      },
      () => {
        this.isLoading = false
      }
    )


    
  }

  showResponse() {
    this.notRobot = true
  }

}

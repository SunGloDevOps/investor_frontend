import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: AuthService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
  }

  login(): void {

    const email: string = this.loginForm.controls['email'].value;
    const password: string = this.loginForm.controls['password'].value;

    this.loginService.login(email, password).subscribe(
      res => {
        if(res.status == 200) {
          this.tokenService.save(res.token)
          this.router.navigate(['/app'])
        }
      }
    )
  }

}

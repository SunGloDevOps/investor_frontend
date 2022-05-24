import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    password2: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.registerForm.controls['fullname'].value)
  }

  hello(): void{
    console.log(this.registerForm.controls['fullname'].value)
  }

  registerUser(): void {
    
   
    const payload = {
      firstname: this.registerForm.controls['fullname'].value,
      lastname: this.registerForm.controls['fullname'].value,
      email: this.registerForm.controls['email'].value,
      phone: this.registerForm.controls['phone'].value,
      password: this.registerForm.controls['password'].value,
      role: "INVESTOR"
    };

    this.authService.registerInvestor(payload).subscribe(
      res => {
        if(res === 200) {
          this.router.navigate(['/login']);
        }

        console.log(res)
      }
    )
    
  }

}

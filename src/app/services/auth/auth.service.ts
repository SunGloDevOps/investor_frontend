import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { api_home_url } from '../../../environments/environment';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';
import { Login } from '../../models/Login';
import { Register } from 'src/app/models/Register';
import { ConfigService } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: string = `${api_home_url}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router,
    private config: ConfigService
  ) { }

 

  login(email: string, password: string): Observable<Login> {

    const payload = {
      email: email,
      password: password
    }

     return this.http.post<Login>(`${this.api_url}/login`, payload).pipe(
      catchError(this.config.handleError)
     )
  }

  register(payload: any): Observable<Register> {
    return this.http.post<Register>(`${this.api_url}/register`, payload).pipe();
  }

  forgotpassword(email: string): Observable<any> {

    const payload = {
      email: email
    }

    return this.http.post(`${this.api_url}/forgotpassword`, payload)
  }

  logout(): void {
    this.tokenService.delete();
    this.router.navigate(['/auth/login'])
  }
}

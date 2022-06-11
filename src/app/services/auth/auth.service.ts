import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api_home_url } from '../../../environments/environment';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: string = `${api_home_url}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {

    const payload = {
      email: email,
      password: password
    }

     return this.http.post(`${this.api_url}/login`, payload).pipe(
       
     )
  }

  register(payload: any): Observable<any> {
    return this.http.post(`${this.api_url}/register`, payload).pipe();
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

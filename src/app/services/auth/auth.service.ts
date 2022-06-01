import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from '../../../app/configs/globals'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  global = new Globals()

  api_home_url = "http://localhost:5000/api/v1";

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {

    const payload = {
      email: email,
      password: password
    }

     return this.http.post(`${this.api_home_url}/auth/login`, payload).pipe(
       
     )
  }

  register(payload: any): Observable<any> {
    return this.http.post(`${this.api_home_url}/register`, payload).pipe();
  }

  forgotpassword(email: string): Observable<any> {

    const payload = {
      email: email
    }

    return this.http.post(`${this.api_home_url}/forgotpassword`, payload)
  }
}

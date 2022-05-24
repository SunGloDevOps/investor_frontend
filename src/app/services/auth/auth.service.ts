import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerInvestor(payload: any): Observable<any> {

    return this.http.post("http://localhost:5000/api/v1/auth/register", payload).pipe();
  }
}

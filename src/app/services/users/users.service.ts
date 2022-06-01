import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api_home_url = "http://localhost:5000/api/v1";

  constructor(
    private http: HttpClient
  ) { }

  updateProfile(id: string, payload: any): Observable<any> {
    return this.http.patch(`${this.api_home_url}/${id}`, payload).pipe();
  }

  getUserDetails(id: string): Observable<any> {
    return this.http.get(`${this.api_home_url}/${id}`).pipe();
  }
}

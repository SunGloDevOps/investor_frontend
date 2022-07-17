import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import IChangepasswordRequest from 'src/app/models/Users/IChangepasswordRequest';
import IChangepasswordResponse from 'src/app/models/Users/IChangepasswordResponse';
import IProfileRequest from 'src/app/models/Users/IProfileRequest';
import IProfileResponse from 'src/app/models/Users/IProfileResponse';
import { api_home_url } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersRepository implements OnInit {

  user?: any = {};

  api_url: string = `${api_home_url}/users`

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    
  }

  getUser(): string {

    const user: any = {
      id: localStorage.getItem('id'),
      firstname: localStorage.getItem('firstname'),
      email: localStorage.getItem('email')
    }

    return user
  }

  setUser(payload: any): void {
    localStorage.setItem('id',payload.id)
    localStorage.setItem('email', payload.email)
    localStorage.setItem('firstname', payload.firstname)
  }

  updateProfile(id: string, payload: IProfileRequest): Observable<IProfileResponse> {
    return this.http.patch<IProfileResponse>(`${this.api_url}/${id}`, payload).pipe();
  }

  getUserDetails(id: string): Observable<IProfileResponse> {
    return this.http.get<IProfileResponse>(`${this.api_url}/${id}`).pipe();
  }

  changePassword(payload: IChangepasswordRequest): Observable<IChangepasswordResponse>{
    return this.http.patch<IChangepasswordResponse>(`${this.api_url}`, payload).pipe()
  }
}

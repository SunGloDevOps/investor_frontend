import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { api_home_url } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  user_id: string = "";

  api_url: string = `${api_home_url}/users`

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    //this.user_id = this.tokenService.getTokenBody().id;
  }

  getUserId(): string {
    return this.user_id
  }

  updateProfile(id: string, payload: any): Observable<any> {
    return this.http.patch(`${this.api_url}/${id}`, payload).pipe();
  }

  getUserDetails(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/${id}`).pipe();
  }
}

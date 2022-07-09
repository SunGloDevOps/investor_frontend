import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  user: any = {}

  constructor(private jwtHelper: JwtHelperService) { }

  save(data: string): void {
    localStorage.setItem('token', data)
  }

  get() {
    return localStorage.getItem('token');
  }

  delete(): void {
    localStorage.removeItem('token')
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token)
  }

  decodeToken(): void {
    const decodedToken = this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter());
  
    this.user = {
      username: decodedToken.username,
      id: decodedToken.id
    }
  }

  getTokenBody() {
    return this.user
  }
}

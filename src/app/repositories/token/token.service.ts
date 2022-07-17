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

    const token = localStorage.getItem('token');

    return localStorage.getItem('token');
  }

  delete(): void {
    localStorage.removeItem('token')
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token)
  }

  decodeToken(token: string): void {
    const decodedToken = this.jwtHelper.decodeToken(token);
    console.log(decodedToken)
    this.user = {
      // firstname: decodedToken.firstname,
      // email: decodedToken.email,
      // id: decodedToken.id
    }
  }

  getTokenBody() {
    return this.user
  }
}

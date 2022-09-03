import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  user: any = {}

  constructor() { }

  save(data: string): void {
    localStorage.setItem('token', data)
  }

  get() {
    return localStorage.getItem('token');
  }

  delete(): void {
    localStorage.removeItem('token')
  }

  getTokenBody() {
    return this.user
  }
}

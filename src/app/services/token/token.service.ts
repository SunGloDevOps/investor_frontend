import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

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
}

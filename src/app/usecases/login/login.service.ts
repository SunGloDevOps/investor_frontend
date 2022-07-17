import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ILoginRequest, ILoginResponse } from 'src/app/models/Index';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';
import { TokenService } from 'src/app/repositories/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authRepository: AuthRepository,
    ) { }

  async execute(payload: ILoginRequest) {
    const authlogin = await this.authRepository.login(payload);
    return authlogin
  }
}

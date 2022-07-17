import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';
import { IRegisterRequest } from 'src/app/models/Index';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private authRepository: AuthRepository,
    ) { }

  async execute(payload: IRegisterRequest) {
    const authregister = await this.authRepository.register(payload);
    return authregister
  }

}

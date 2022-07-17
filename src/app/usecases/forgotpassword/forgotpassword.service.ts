import { Injectable } from '@angular/core';
import { IForgotpasswordRequest } from 'src/app/models/Index';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
 
  constructor(
    private authRepository: AuthRepository,
    ) { }

  async execute(payload: IForgotpasswordRequest) {
    const authforgotpassword = await this.authRepository.forgotpassword(payload);
    return authforgotpassword
  }
  
}

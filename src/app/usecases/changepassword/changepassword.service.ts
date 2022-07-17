import { Injectable } from '@angular/core';
import IChangepasswordRequest from 'src/app/models/Users/IChangepasswordRequest';
import { AuthRepository } from 'src/app/repositories/auth/auth.service';
import { UsersRepository } from 'src/app/repositories/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(
    private userRepository: UsersRepository
    ) { }

  async execute(payload: IChangepasswordRequest) {
    const authchangepassword = await this.userRepository.changePassword(payload);
    return authchangepassword;
  }
  
}

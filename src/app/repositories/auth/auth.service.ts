import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { api_home_url } from '../../../environments/environment';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';
import { Login } from '../../models/Login';
import { Register } from 'src/app/models/Register';
import { ConfigService } from 'src/app/config/config.service';
import { IForgotpasswordRequest, IForgotpasswordResponse, ILoginRequest } from 'src/app/models/Index';
import { ILoginResponse } from 'src/app/models/Auth/ILoginResponse';
import { IRegisterResponse } from 'src/app/models/Auth/IRegisterResponse';
import { IRegisterRequest } from 'src/app/models/Auth/IRegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {

  api_url: string = `${api_home_url}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router,
    private config: ConfigService
  ) { }

 

  login(payload: ILoginRequest): Observable<ILoginResponse> {
    
    return this.http.post<ILoginResponse>(`${this.api_url}/login`, payload).pipe()

  }

  register(payload: IRegisterRequest): Observable<IRegisterResponse> {

    return this.http.post<IRegisterResponse>(`${this.api_url}/register`, payload).pipe(
      
    );

  }

  forgotpassword(payload: IForgotpasswordRequest): Observable<IForgotpasswordResponse> {

    return this.http.post<IForgotpasswordResponse>(`${this.api_url}/forgotpassword`, payload).pipe(
      
    )

  }

  logout(): void {
    this.tokenService.delete();
    this.router.navigate(['/auth/login'])
  }
}

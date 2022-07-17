import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/repositories/token/token.service';
import { finalize, Observable } from 'rxjs';
import { UsersRepository } from 'src/app/repositories/users/users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  
  constructor(private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //get token from browser
    let token = this.tokenService.get();
    //attach token to request header
    const authreq = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + token),
    })

    return next.handle(authreq)
  }
}

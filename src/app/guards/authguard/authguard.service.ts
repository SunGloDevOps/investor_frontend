import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../repositories/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    //get token from browser
    const token = this.tokenService.get();
   
    if(token !== null){
      //  isTokenExpired = this.tokenService.isTokenExpired(token);
    }

    if(token === null) {
      this.router.navigate(['/auth/login'])
    }

    return true;
  }
}

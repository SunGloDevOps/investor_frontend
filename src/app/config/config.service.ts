import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public handleError(error: HttpErrorResponse){

    let message: string = ''

    if(error.status === 0){
      message = 'An error occurred: ' +  error.error;
    } 
    else if(error.status === undefined){
      message = 'No internet connection'
    }
    else {
      message = `Backend return code ${error.status}, body was: ${error.error}`
    }

    return throwError(() => new Error(`${message}`))
  }
}

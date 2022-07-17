import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_home_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  api_url: string= `${api_home_url}/users`;

  constructor(
    private http: HttpClient
  ) { }

  getBankBalance(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/${id}`).pipe();
  }

}

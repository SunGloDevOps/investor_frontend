import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_home_url } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  api_home_url: string = `${api_home_url}/transactions`;

  constructor(
    private http: HttpClient
  ) { }

  getAllUserTransaction(payload: any): Observable<any> {
    return this.http.get(`${this.api_home_url}`, payload).pipe()
  }
}

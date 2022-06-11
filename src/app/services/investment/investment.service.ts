import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { api_home_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  api_url: string = `${api_home_url}/investments`

  constructor(private http: HttpClient) { }

  getInvestments(): Observable<any> {
    return this.http.get(`${this.api_url}`).pipe();
  }

  invest(payload: any): Observable<any> {
    return this.http.post(`${this.api_url}`, payload)
  }

  viewInvestment(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/${id}`).pipe()
  }
}

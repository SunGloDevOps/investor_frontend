import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  api_home_url = "http://localhost:5000/api/v1/investments";

  constructor(private http: HttpClient) { }

  getInvestments(): Observable<any> {
    return this.http.get(`${this.api_home_url}`).pipe();
  }

  invest(payload: any): Observable<any> {
    return this.http.post(`${this.api_home_url}`, payload)
  }

  viewInvestment(id: string): Observable<any> {
    return this.http.get(`${this.api_home_url}/${id}`)
  }
}

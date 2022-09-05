import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  api_url: string = `${environment.api_home_url}/investments`;

  private _refreshRequired = new Subject<void>()

  constructor(private http: HttpClient) { }

  get refreshRequired(){
    return this._refreshRequired;
  }

  getInvestments(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/${id}`).pipe();
  }

  invest(id: string, payload: any): Observable<any> {
    return this.http.post(`${this.api_url}/updatePortfolio/${id}`, payload)
  }

  viewInvestment(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/projects/${id}`).pipe()
  }

  searchInvestments(user: string, keyword: string): Observable<any> {
    const payload = {
      user: user
    }
    return this.http.post<any>(`${this.api_url}/search/${keyword}`, payload).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, Subject, tap } from 'rxjs';
import { api_home_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  api_url: string= `${api_home_url}/wallets`;

  constructor(
    private http: HttpClient
  ) { }

  private _refreshRequired = new Subject<void>()

  get refreshRequired(){
    return this._refreshRequired;
  }

  getWalletDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.api_url}/${id}`).pipe();
  }

  addBankDetails(id: string, payload: any): Observable<any> {
    return this.http.post<any>(`${this.api_url}/addBankDetails/${id}`, payload).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    )
  }

  addCryptoAddress(id: string, payload: any): Observable<any> {
    return this.http.post<any>(`${this.api_url}/addCryptoAddress/${id}`, payload).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    )
  }

  investCrypto(id: string, capital: number): Observable<any> {
    const payload = {
      capital: capital
    }
    return this.http.patch<any>(`${this.api_url}/invest/crypto/${id}`, payload)
  }

  investBank(id: string, capital: number): Observable<any> {
    const payload = {
      capital: capital
    }
    return this.http.post<any>(`${this.api_url}/invest/bank/${id}`, payload).pipe()
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subject, tap } from 'rxjs';
import { api_home_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  api_url: string= `${api_home_url}/locations`;

  constructor(
    private http: HttpClient
  ) { }

  private _refreshRequired = new Subject<void>()

  get refreshRequired(){
    return this._refreshRequired;
  }

  //get json of countries 
  getCountries(): Observable<any> {
    return this.http.get<any>(`${this.api_url}/countries`).pipe(
      tap(()=>{
        this._refreshRequired.next()
      })
    )
  }

  //get json of cites by country
  getState(country: string): Observable<any> {
    return this.http.get<any>(`${this.api_url}/states/${country}`).pipe(
      tap(()=>{
        this._refreshRequired.next()
      })
    )
  }
}


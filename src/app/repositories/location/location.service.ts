import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  api_url: string= `${environment.api_home_url}/locations`;

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'X-CSCAPI-KEY': 'MGZMRlZLbkZ0SmNiOGkxQzBlREFLYjBKdlZZU1BnRmlRbGI3N2lvVg=='
    })
    };

  private _refreshRequired = new Subject<void>()

  get refreshRequired(){
    return this._refreshRequired; 
  }

  getCountry(): Observable<any[]>{
    return this.http.get<any[]>('https://api.countrystatecity.in/v1/countries', {headers: this.httpOptions.headers})
  }

  getStateOfSelectedCountry(countryIso: string): Observable<any>{
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states`,{headers: this.httpOptions.headers} )
  }

  getCitiesOfSelectedState(countryIso: any, stateIso: any): Observable<any>{
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`, {headers: this.httpOptions.headers} )
  }
}


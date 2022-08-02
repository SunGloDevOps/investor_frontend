import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) { }

  //get json of countries 
  getCountries(): Observable<any> {
    return this.http.get("https://api.countrystatecity.in/v1/countries", 
    {
      headers:{
        "X-CSCAPI-KEY": "API_KEY"
    }
    }).pipe()
  }

  //get json of cites by country
  getCities(countryCode: string): Observable<any> {
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryCode}/cities`, {
      headers:{
        "X-CSCAPI-KEY": "API_KEY"
    }
    })
  }
}


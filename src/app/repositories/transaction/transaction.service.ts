import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  api_home_url: string = `${environment.api_home_url}/transactions`;

  private _refreshRequired = new Subject<void>()

  constructor(
    private http: HttpClient
  ) { }

  get refreshRequired(){
    return this._refreshRequired;
  }

  getUserTransactions(id: string): Observable<any> {
    return this.http.get(`${this.api_home_url}/${id}`).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    )
  }
}

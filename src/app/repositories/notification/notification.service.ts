import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { api_home_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  api_url: string = `${api_home_url}/notifications`;

  private _refreshRequired = new Subject<void>()

  constructor(
    private http: HttpClient
  ) { }

  get refreshRequired(){
    return this._refreshRequired;
  }

  getNotifications(id: string): Observable<any>{
    return this.http.get<any>(`${this.api_url}/${id}`).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    )
  }

  readNotification(id: string, type: string): Observable<any> {
    return this.http.patch<any>(`${this.api_url}/${id}`,{type: type}).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    )
  }

}

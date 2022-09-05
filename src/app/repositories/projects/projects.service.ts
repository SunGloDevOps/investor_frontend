import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { IProjectResponse } from 'src/app/models/Projects/IProject';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  api_url: string = `${environment.api_home_url}/projects`;

  private _refreshRequired = new Subject<void>()

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  get refreshRequired(){
    return this._refreshRequired;
  }

  getAllProject(): Observable<IProjectResponse> {
    return this.http.get<IProjectResponse>(`${this.api_url}`).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    )
  }

  getProject(id: string): Observable<any> {
    return this.http.get<any>(`${this.api_url}/${id}`).pipe(
      tap(()=>{
        this.refreshRequired.next();
      })
    );
  }

  searchProject(user: string, keyword: string): Observable<any> {

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

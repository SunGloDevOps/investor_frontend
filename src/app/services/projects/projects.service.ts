import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_home_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  api_url: string = `${api_home_url}/projects`

  constructor(
    private http: HttpClient
  ) { }

  getAllProject(): Observable<any> {
    return this.http.get(`${this.api_url}`).pipe()
  }

  getProject(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/${id}`).pipe();
  }

  
}

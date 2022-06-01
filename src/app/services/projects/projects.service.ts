import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  api_home_url = "http://localhost:5000/api/v1/projects";

  constructor(
    private http: HttpClient
  ) { }

  getAllProject(): Observable<any> {
    return this.http.get(`${this.api_home_url}`).pipe()
  }


  getProject(id: string): Observable<any> {
    return this.http.get(`${this.api_home_url}/${id}`).pipe();
  }

  
}

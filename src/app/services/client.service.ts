// form.service.ts
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProjectFilterModel} from "../models/project-filter.model";
import {ProjectsModel} from "../models/projects.model";

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://osta.dimche.tatar/api/v1/';

  constructor(private http: HttpClient) {}
  getAllReviews(): Observable<any>{
    return this.http.get(this.apiUrl + "reviews");
  }

  getAllAchievements(): Observable<any>{
    return this.http.get(this.apiUrl + "achievements");
  }

  getAllEvents(): Observable<any> {
    return this.http.get(this.apiUrl + "events")
  }

  getAllEventsPage(): Observable<any> {
    return this.http.get(this.apiUrl + "events?page=1&limit=9")
  }
  getEvent(id: number): Observable<any> {
    return this.http.get(this.apiUrl + "events/" + id);
  }

  getAllProjects(): Observable<any> {
    return this.http.get(this.apiUrl + "buildings");
  }

  getProject(id: number): Observable<any>  {
    return this.http.get(this.apiUrl + "buildings/" + id);
  }
  lang = localStorage.getItem('lang') || 'ru';
  getProjectFilter(filter: ProjectFilterModel): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'X-Localization': this.lang  });
    const params = new HttpParams({ fromObject: filter as any });

    return this.http.get<ProjectsModel[]>(this.apiUrl + "buildings", {
      // headers: headers,
      params: params
    });
  }

  getAllHomeland(): Observable<any> {
    return this.http.get(this.apiUrl + "mosque-histories");
  }
}

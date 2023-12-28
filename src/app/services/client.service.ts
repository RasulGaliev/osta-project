// form.service.ts
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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


}

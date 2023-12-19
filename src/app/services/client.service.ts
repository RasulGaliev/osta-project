// form.service.ts
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ReviewModel} from "../models/review.model";

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://osta.dimche.tatar/api/v1/';

  constructor(private http: HttpClient) {}
  getAllReviews(): Observable<any>{
    const headers = new HttpHeaders({
      'X-Localization': localStorage.getItem('lang')!
    });
    const options = { headers: headers };
    return this.http.get(this.apiUrl + "reviews", options);
  }
}

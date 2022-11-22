/* Standard Modules */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/* Interfaces */
import { GetFeedResponseInterface } from '../types/get-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed(url: string): Observable<GetFeedResponseInterface> {
      const fullUrl = environment.apiUrl + url;
      return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}

/* Standard Modules */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/* Interfaces */
import { GetGlobalFeedResponseInterface } from 'src/app/global-feed/types/get-global-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeedService {

  constructor(
    private http: HttpClient
  ) { }

  getGlobalFeed(url: string): Observable<GetGlobalFeedResponseInterface> {
      const fullUrl = environment.apiUrl + url;
      return this.http.get<GetGlobalFeedResponseInterface>(fullUrl);
  }
}

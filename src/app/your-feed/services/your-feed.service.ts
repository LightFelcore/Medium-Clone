/* Standard Modules */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/* Interfaces */
import { GetYourFeedResponseInterface } from 'src/app/your-feed/types/get-your-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class YourFeedService {

  constructor(
    private http: HttpClient
  ) { }

  getYourFeed(url: string): Observable<GetYourFeedResponseInterface> {
      const fullUrl = environment.apiUrl + url;
      return this.http.get<GetYourFeedResponseInterface>(fullUrl);
  }
}

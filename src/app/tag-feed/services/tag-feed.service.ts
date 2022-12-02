/* Standard Modules */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/* Interfaces */
import { GetTagFeedResponseInterface } from 'src/app/tag-feed/types/get-tag-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TagFeedService {

  constructor(
    private http: HttpClient
  ) { }

  getTagFeed(url: string): Observable<GetTagFeedResponseInterface> {
      const fullUrl = environment.apiUrl + url;
      return this.http.get<GetTagFeedResponseInterface>(fullUrl);
  }
}

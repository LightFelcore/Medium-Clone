/* Standard Modules */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/* Custom Types */
import { PopularTagType } from 'src/app/shared/types/popular-tags.type';

/* Custom Interfaces */
import { GetPopularTagsReponseInterface } from 'src/app/shared/modules/popular-tags/types/get-popular-tags-reponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(
    private http: HttpClient
  ) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get<GetPopularTagsReponseInterface>(url).pipe(map((response: GetPopularTagsReponseInterface) => {
      return response.tags;
    }))
  }
}

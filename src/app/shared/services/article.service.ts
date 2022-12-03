/* Standard Modules */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/* Interfaces */
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { GetArticleResponseInterface } from 'src/app/article/types/get-article-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getArticle(slug: string): Observable<ArticlesInterface> {
      const fullUrl = environment.apiUrl + '/articles/' + slug;
      return this.http.get<GetArticleResponseInterface>(fullUrl)
        .pipe(map((response: GetArticleResponseInterface) => {
        return response.article;
      }));
  }
}

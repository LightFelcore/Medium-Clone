/* Standard Modules */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/* Custom Interfaces */
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { SaveArticleResponseInterface } from 'src/app/shared/types/save-article-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  constructor(
    private http: HttpClient
  ) { }

  createArticle(articleInput: ArticleInputInterface): Observable<ArticlesInterface> {
    const url = environment.apiUrl + '/articles';
    return this.http.post<SaveArticleResponseInterface>(url, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => {
        return response.article;
      }))
  }
}

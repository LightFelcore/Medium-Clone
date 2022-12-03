/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Components */
import { CreateArticleComponent } from 'src/app/create-article/components/create-article/create-article.component';

/* Custom Modules */
import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module';

/* Services */
import { CreateArticleService } from './services/create-article.service';

/* Store & Effects */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Custom Effects */
import { CreateArticleEffect } from 'src/app/create-article/store/effects/create-article.effects';

/* Custom Reducer */
import { reducers } from 'src/app/create-article/store/reducers';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleFormModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('createArticle', reducers),
    EffectsModule.forFeature([CreateArticleEffect]),
  ],
  providers: [
    CreateArticleService
  ]
})
export class CreateArticleModule { }

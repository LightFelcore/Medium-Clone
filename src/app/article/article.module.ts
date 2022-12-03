/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Modules */
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';

/* Custom Components */
import { ArticleComponent } from 'src/app/article/components/article/article.component';

/* Guards */
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

/* Store & Effects */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Custom Effects */
import { GetArticleEffect } from 'src/app/article/store/effects/get-article.effects';
import { DeleteArticleEffect } from 'src/app/article/store/effects/delete-article.effects';

/* Reducers */
import { reducers } from 'src/app/article/store/reducers';

/* Services */
import { ArticleService } from 'src/app/article/services/article.service';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';

/* Routes */
const routes = [
  { 
    path: 'articles/:slug', 
    component: ArticleComponent,
    canActivate: [AuthGuard],
  }
]

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      GetArticleEffect,
      DeleteArticleEffect
    ]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    BannerModule,
    LoadingModule,
    BackendErrorMessagesModule,
    TagListModule
  ],
  providers: [
    AuthGuard,
    ArticleService,
    SharedArticleService
  ]
})
export class ArticleModule { }

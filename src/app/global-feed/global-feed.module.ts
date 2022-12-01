/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Modules */
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';

/* Custom Components */
import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component';

/* Guards */
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

/* Store & Effects */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Custom Effects */
import { GetGlobalFeedEffect } from './store/effects/get-global-feeds.effects';

/* Reducers */
import { reducers } from 'src/app/global-feed/store/reducers';

/* Routes */
const routes = [
  { path: '', component: GlobalFeedComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    EffectsModule.forFeature([GetGlobalFeedEffect]),
    StoreModule.forFeature('globalFeed', reducers),
    RouterModule.forChild(routes),
    BannerModule,
    LoadingModule,
    BackendErrorMessagesModule,
    PopularTagsModule
  ],
  providers: [
    AuthGuard
  ]
})
export class GlobalFeedModule { }

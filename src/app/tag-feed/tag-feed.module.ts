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
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module';

/* Custom Components */
import { TagFeedComponent } from 'src/app/tag-feed/components/tag-feed/tag-feed.component';

/* Guards */
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

/* Store & Effects */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Custom Effects */
import { GetTagFeedEffect } from 'src/app/tag-feed/store/effects/get-tag-feeds.effects';

/* Reducers */
import { reducers } from 'src/app/tag-feed/store/reducers';

/* Services */
import { TagFeedService } from 'src/app/tag-feed/services/tag-feed.service';

/* Routes */
const routes = [
  { path: 'tags/:slug', component: TagFeedComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    EffectsModule.forFeature([GetTagFeedEffect]),
    StoreModule.forFeature('tagFeed', reducers),
    RouterModule.forChild(routes),
    BannerModule,
    LoadingModule,
    BackendErrorMessagesModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  providers: [
    AuthGuard,
    TagFeedService
  ]
})
export class TagFeedModule { }

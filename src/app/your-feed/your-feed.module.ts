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
import { YourFeedComponent } from 'src/app/your-feed/components/your-feed/your-feed.component';

/* Guards */
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

/* Store & Effects */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Custom Effects */
import { GetYourFeedEffect } from 'src/app/your-feed/store/effects/get-your-feeds.effects';

/* Reducers */
import { reducers } from 'src/app/your-feed/store/reducers';

/* Services */
import { YourFeedService } from 'src/app/your-feed/services/your-feed.service';

/* Routes */
const routes = [
  { path: 'feed', component: YourFeedComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    YourFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    EffectsModule.forFeature([GetYourFeedEffect]),
    StoreModule.forFeature('yourFeed', reducers),
    RouterModule.forChild(routes),
    BannerModule,
    LoadingModule,
    BackendErrorMessagesModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  providers: [
    AuthGuard,
    YourFeedService
  ]
})
export class YourFeedModule { }

/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Modules */
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

/* Store & Effects */
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

/* Custom Components */
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed.component';

/* Services */
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';

/* Custom Effects */
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/get-feeds.effects';

/* Custom Reducers */
import { reducers } from 'src/app/shared/modules/feed/store/reducers';

@NgModule({
  declarations: [ 
    FeedComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule.forChild([]),
    BackendErrorMessagesModule,
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }

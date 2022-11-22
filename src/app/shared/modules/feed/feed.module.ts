/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Custom Components */
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed.component';

/* Services */
import { FeedService } from './services/feed.service';

/* Store */
import { EffectsModule } from '@ngrx/effects';

/* Effects */
import { GetFeedEffect } from './store/effects/get-feeds.effects';

@NgModule({
  declarations: [ 
    FeedComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect])
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }

/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Components */
import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';

/* Guards */
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

/* Store & Effects */
import { EffectsModule } from '@ngrx/effects';

/* Routes */
const routes = [
  { path: '', component: GlobalFeedComponent, CanActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    EffectsModule.forFeature([]),
    RouterModule.forChild(routes),
  ],
  providers: [
    AuthGuard
  ]
})
export class GlobalFeedModule { }

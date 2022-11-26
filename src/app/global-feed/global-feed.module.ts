/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Modules */
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

/* Custom Components */
import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';

/* Guards */
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

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
    RouterModule.forChild(routes),
    BannerModule,
    LoadingModule
  ],
  providers: [
    AuthGuard
  ]
})
export class GlobalFeedModule { }

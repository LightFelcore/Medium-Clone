/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Store & Effects */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Custom Components */
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';

/* Reducers */
import { reducers } from 'src/app/shared/modules/popular-tags/store/reducers';

/* Custom Effects */
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';

/* Custom Modules */
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
    RouterModule.forChild([]),
    LoadingModule,
    BackendErrorMessagesModule
  ],
  exports: [
    PopularTagsComponent
  ]
})
export class PopularTagsModule { }

/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Custom Components */
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed.component';

/* Custom Modules */
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';

@NgModule({
  declarations: [ 
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    PaginationModule,
    TagListModule
  ],
  exports: [
    FeedComponent
  ],
  providers: []
})
export class FeedModule { }

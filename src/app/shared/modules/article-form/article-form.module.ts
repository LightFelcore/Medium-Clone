/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* Custom Components */
import { ArticleFormComponent } from './components/article-form/article-form.component';

/* Custom Modules */
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';

@NgModule({
  declarations: [
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    ReactiveFormsModule,
  ],
  exports: [
    ArticleFormComponent
  ]
})
export class ArticleFormModule { }

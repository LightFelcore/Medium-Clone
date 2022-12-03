/* Standard Modules */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/* Custom Interfaces */
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean | null;
  @Input('errors') errorsProps: BackendErrorsInterface | null;
  @Output('articleSubmit') articleSubmitEvent: EventEmitter<ArticleInputInterface> = new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      title: new FormControl(this.initialValuesProps.title, [Validators.required]),
      description: new FormControl(this.initialValuesProps.description, Validators.required),
      body: new FormControl(this.initialValuesProps.body, Validators.required),
      tagList: new FormControl(this.initialValuesProps.tagList.join(' '), Validators.required),
    });
  }

  onSubmit(): void {
    const articleInput: ArticleInputInterface = {
      ...this.form.value,
      tagList: this.form.value.tagList.split(' ')
    }
    this.articleSubmitEvent.emit(articleInput);
  }

}

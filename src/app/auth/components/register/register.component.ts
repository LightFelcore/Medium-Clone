/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Actions */
import { registerAction, switchAuthPage } from 'src/app/auth/store/actions/register.action';

/* Selectors */
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/auth/store/selectors';

/* Interfaces */
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues()
  }

  ngOnDestroy(): void {
    this.clearBackendErrors();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  clearBackendErrors() {
    this.store.dispatch(switchAuthPage());
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({ request }));
  }

} 

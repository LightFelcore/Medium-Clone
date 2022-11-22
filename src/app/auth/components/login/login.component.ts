/* Standard Modules */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

/* Store */
import { select, Store } from '@ngrx/store';

/* Actions */
import { loginAction, switchAuthPage } from 'src/app/auth/store/actions/login.action';

/* Selectors */
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/auth/store/selectors';

/* Interfaces */
import { LoginRequestInterface } from 'src/app/auth/types/login-request.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  clearBackendErrors() {
    this.store.dispatch(switchAuthPage());
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value 
    }
    this.store.dispatch(loginAction({ request }));
  }

} 

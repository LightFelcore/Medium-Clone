/* Standard Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/* Custom Modules */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';

/* Custom Components */
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

/* Custom Reducers */
import { reducers } from 'src/app/auth/store/reducers';

/* Services */
import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

/* Custom Effects */
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/get-current-user.effect';

/* Guards */
import { NotAuthGuard } from 'src/app/shared/guards/not-auth.guard';

/* Routes */
const routes = [
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] },
  { path: 'login', component: LoginComponent,  canActivate: [NotAuthGuard] }
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect
    ]),
    BackendErrorMessagesModule
  ],
  providers: [
    AuthService,
    PersistanceService,
    NotAuthGuard
  ]
})
export class AuthModule { }

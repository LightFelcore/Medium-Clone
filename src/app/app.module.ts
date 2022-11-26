/* Standard Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

/* Store */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

/* Custom Modules */
import { AuthModule } from 'src/app/auth/auth.module';
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module';
import { GlobalFeedModule } from 'src/app/global-feed/global-feed.module';

/* Standard Components */
import { AppComponent } from 'src/app/app.component';

/* Services & Interceptors */
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { AuthInterceptorService } from 'src/app/shared/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    AuthModule,
    TopBarModule,
    GlobalFeedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

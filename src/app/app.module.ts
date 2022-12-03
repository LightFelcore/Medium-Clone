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
import { YourFeedModule } from 'src/app/your-feed/your-feed.module';
import { TagFeedModule } from 'src/app/tag-feed/tag-feed.module';
import { ArticleModule } from 'src/app/article/article.module';
import { CreateArticleModule } from 'src/app/create-article/create-article.module';
import { EditArticleModule } from 'src/app/edit-article/edit-article.module';

/* Standard Components */
import { AppComponent } from 'src/app/app.component';

/* Services & Interceptors */
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AuthInterceptorService } from 'src/app/shared/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CreateArticleModule,
    ArticleModule,
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    EditArticleModule,
    EffectsModule.forRoot([]),
    GlobalFeedModule,
    HttpClientModule,
    NgOptimizedImage,
    StoreModule.forRoot({
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    TopBarModule,
    TagFeedModule,
    YourFeedModule,
  ],
  providers: [
    PersistanceService,
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Standard Modules */
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Services */
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private persistanceService: PersistanceService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get('accessToken');
    return next.handle(request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    }));
  }
}

import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const id_token = localStorage.getItem('id_token');

    if (id_token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + id_token)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }

  }

}

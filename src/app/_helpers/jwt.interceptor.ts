import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	
	constructor(private authService: AuthService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		const CurrentUser = this.authService.currentUserValue;
		if (CurrentUser !== null) {
			 request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${CurrentUser.token}`
                }
            });
		}

		return next.handle(request);
	}
}
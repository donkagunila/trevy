import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
	
	constructor(private router:Router, private authService: AuthService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		const CurrentUser = this.authService.currentUserValue;

		if (CurrentUser) {
	        this.router.navigate(['/']);
			return false;
		}

        return true;
	}
}

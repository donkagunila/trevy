import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
  			  private router: Router) { }

  ngOnInit() {
  }

  public logout(): void{
  	this.authService.logout();
  	this.router.navigate(['/login']);
  }

}

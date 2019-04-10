import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public email: FormControl;
  public password: FormControl;


  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    // this.getUser();
    this.email = new FormControl();
    this.password = new FormControl();


    this.form = new FormGroup({
      'email': this.email,
      'password': this.password,
    });
  }

  login(form){
    console.log('form', form);
  	// this.authService.login(form)
    // .subscribe()
  }

  getUser(){

    // console.log(this.authService.getUser());
  }


  public onSubmit(): void{
    
    // attempt login
    this.authService.login(this.form.value).subscribe(
        data => {
          console.log('navigate');
          this.router.navigate(['/home']);
        }
      );
  }

}

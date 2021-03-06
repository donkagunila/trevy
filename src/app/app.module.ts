import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// services
import { AuthService } from './_services/auth.service';
import { AlbumService } from './_services/album.service';

import { JwtInterceptor } from './_helpers/jwt.interceptor';

import { AppComponent } from './app.component';
import { AlbumComponent } from './pages/album/album.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule }   from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AlbumHeadComponent } from './heads/album-head/album-head.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    AlbumHeadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AlbumService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

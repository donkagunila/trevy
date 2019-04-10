import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './_guards/auth.guard';
import { GuestGuard } from './_guards/guest.guard';
// imports


import { AlbumComponent } from './pages/album/album.component'; 
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainComponent } from './pages/main/main.component'


const routes: Routes = [
  {
  	path: 'home',
  	component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'albums', 
    component: AlbumComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', 
    component: LoginComponent,
    canActivate: [GuestGuard] 
  },
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

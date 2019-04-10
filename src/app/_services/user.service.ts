import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Album } from '../album';


import { User } from '../_models/user';

const httpOptions = {
	headers: new HttpHeaders({
		'content-type': 'Application/json',
		'Accept': 'Application/json'
	})
}

@Injectable({ providedIn: 'root'})
export class UserService {

	private apiUrl = 'http://localhost:8000/api/';
	
	constructor(private http: HttpClient) {}

	getAll() {
		return this.http.get<User[]>('http://localhost:8000/api/users');
	}


	// get album by user id
  	getAlbums(): Observable<any>{
  		return  this.http.get<any>(this.apiUrl + 'user/albums', httpOptions).pipe(
  			map( data => {
  				if (!data){
  					console.log(null);
  				}
  			}));
  	}
}
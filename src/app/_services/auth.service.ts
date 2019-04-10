import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject ,Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../_models/user';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'Application/json',
    'Accept': 'Application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private apiUrl = 'https://trevy-api.herokuapp.com/api/';
  private apiUrl = 'http://localhost:8000/api/';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  login(formData){

  	return this.http.post<any>(this.apiUrl + 'login',formData, httpOptions).pipe(
        map(data => {
          if (data.error) {
            console.log('failed', data);
          } else if (data.token){
            console.log(data.token);
            // store the access token
            localStorage.setItem('currentUser',JSON.stringify(data));
            this.currentUserSubject.next(data);

          } else {
            console.log('invalid user, try again');
          }
          return data;
        })
      );

  }


   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }



  // getUser(){
  //   return JSON.parse(localStorage.getItem('user'));
  // }



  // storeUser(user){
  //   localStorage.setItem('user', JSON.stringify(user));
  // }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };


}
  log(error){
    console.log(error)
  }


}

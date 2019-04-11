import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Album } from '../album';


// set headers
const httpOptions = {
	headers: new HttpHeaders({
		'content-type': 'Application/json',
		'Accept': 'Application/json'
	})
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

	// private apiUrl = 'https://trevy-api.herokuapp.com/api/';
  private apiUrl = 'http://localhost:8000/api/';

	albums: Album[];

  constructor(private http: HttpClient) { }

  // create album
  createAlbum(formData) {
    return this.http.post(this.apiUrl + 'albums', formData ,httpOptions);
  }


  // get all albums
  getAlbums(): Observable<Album[]>{
  	return this.http.get<Album[]>(this.apiUrl + 'albums', httpOptions);
  }


  // Get album details
  getAlbumsDetails(album_id): Observable<Album[]>{
  	return  this.http.get<Album[]>(this.apiUrl + 'albums'  + album_id, httpOptions);
  }



}

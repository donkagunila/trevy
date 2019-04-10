import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlbumService } from '../../_services/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	user: any;
	album: any;

  constructor(private authService: AuthService,
  			      public albumService: AlbumService) { }

  ngOnInit() {
  	// this.user = this.authService.getUser();
  	// console.log(this.user.access_token);

  	this.album = this.albumService.getAlbums();
  }


}

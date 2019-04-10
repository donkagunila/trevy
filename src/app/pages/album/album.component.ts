import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../_services/album.service';
import { UserService } from '../../_services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albums: any;
  public form: FormGroup;
  public title: FormControl;

  constructor(private albumService: AlbumService,
              private userService: UserService) { }

  ngOnInit() {
    this.title = new FormControl();

    this.form = new FormGroup({
      'title': this.title,
    });

    this.getAllAlbums();
  }

  // create album
  public onSubmit(): void{
    this.albumService.createAlbum(this.form.value).subscribe(
        data => {
          console.log(data);
        }
      )
  }


  log(x){
  	console.log(x);
  }


  login(form){
  	console.log(form.value);
  }


  getAllAlbums(){
    this.userService.getAlbums().subscribe(
        (data) => {
          if (data) {
          this.albums = data;
          console.log(data);
            // code...
          } else {
            console.log('no data');
          }
        }
      )
  }

}

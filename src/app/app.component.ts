import { Component } from '@angular/core';
import { NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moments';


  constructor(public config: NgbDropdownConfig){
  	this.config.placement = 'bottom-right'
  }

}

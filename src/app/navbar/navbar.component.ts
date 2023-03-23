import { Component } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private user: UsersService) { }

loggedUser=this.user.users.map(el=>el.username);

}

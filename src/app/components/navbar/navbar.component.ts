import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {



  constructor(private user: UsersService,private _todoInfo:TodosService) {
    
   }
  // loggedUser=this.user.users.map(el=> el.username)
  loggedUser=this.user.username
  totalElm=this._todoInfo;



}

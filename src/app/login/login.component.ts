import { Component} from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  console = console;

  userInput:String="";
  quoteInput:String="";

  constructor(private _user: UsersService) {
  }

  addUser() {
    this._user.createUser(
      this.userInput,
      this.quoteInput
    );
  }
 
}

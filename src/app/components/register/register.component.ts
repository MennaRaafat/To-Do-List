import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usernameInput!:String;
  quoteInput!:String;
  passwordInput!:String;


  constructor(private _user: UsersService){}

  addUser() {
    this._user.createUser(
      this.usernameInput,
      this.quoteInput,
      this.passwordInput
    );
  }

}

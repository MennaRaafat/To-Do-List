import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  console = console;

  userInput:String="";
  quoteInput:String="";
  isLogged = false  ;
  constructor(private _user: UsersService,private _auth:AuthService) {
    this._auth.loggedIn$.subscribe((res)=>{
      this.isLogged = res
    })
  }

  // addUser() {
  //   this._user.createUser(
  //     this.userInput,
  //     this.quoteInput
  //   );
  // }
  change() {
    this._auth.change()
  } 
}

import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;
  console = console;

  userInput:String="";
  quoteInput:String="";
  password:String="";
  isLogged = false  ;
  constructor(private _user: UsersService,private _auth:AuthService) {
    this._auth.loggedIn$.subscribe((res)=>{
      this.isLogged = res
    })
    this.myForm = new FormGroup({
      userInput: new FormControl(null, [Validators.required , Validators.pattern('')]),
      quoteInput: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  change() {
    this._auth.change()
  }
  submit() {
   this._user.CheckUser(this.userInput,this.password)
  } 
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../components/todos/models/todo';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:User[]=[]
 username!:String
 userQuote!:String
constructor(private router:Router) { }

  createUser(usernameInput: String,quoteInput:String,passwordInput:String) {
      const userData = { username: usernameInput, quote:quoteInput, password:passwordInput};
       this.userQuote=quoteInput;
      if(localStorage.getItem("Users")==userData.username){
        const usersRegistered=localStorage.getItem('Users')
        console.log(usersRegistered)
        if(usersRegistered){
        const users_log=JSON.parse(usersRegistered)
        const users=users_log.map((elem:any)=>{
          if(elem.password == passwordInput){
            // this.router.navigate(['/'])
          }
          // }else{
          //   this.users.push(userData);
          //   localStorage.setItem('Users',JSON.stringify(this.users));
            this.router.navigate(['/'])
          // }
        })
        }
    }else{
      this.users.push(userData);
      localStorage.setItem('Users',JSON.stringify(this.users));
      this.router.navigate(['/'])
    }
  }

  CheckUser(usernameInput: String,passwordInput:String){
    const userData = { username: usernameInput, password:passwordInput};
    if(localStorage.getItem("Users")){
      const usersRegistered=localStorage.getItem('Users')
      console.log(usersRegistered)
      if(usersRegistered){
        const users_log=JSON.parse(usersRegistered)
        const users=users_log.map((elem:any)=>{
          if(elem.username == usernameInput){
            console.log(elem.username)
            console.log(usernameInput)
            if(elem.password == passwordInput){
              console.log(elem.password)
              console.log(passwordInput)
              this.username=usernameInput
              this.userQuote=elem.quote
              this.router.navigate(['/user'])
            }
          }
          // else{
          //   // console.log(users)
          //   this.router.navigate(['/register'])
          // }
        })
      }
      // else{
      //   this.router.navigate(['/register'])
      // }
    }
    else{
      this.router.navigate(['/register'])
    }
  }

}

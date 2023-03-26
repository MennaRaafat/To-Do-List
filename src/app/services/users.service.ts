import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../components/todos/models/todo';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:User[]=[]

constructor(private router:Router) { }

  createUser(usernameInput: String,quoteInput:String,passwordInput:String) {
      const userData = { username: usernameInput, quote:quoteInput, password:passwordInput};
      // this.users.push(userData);
      // localStorage.setItem('Users',JSON.stringify(this.users));
      if(localStorage.getItem("Users")){
        const usersRegistered=localStorage.getItem('Users')
        if(usersRegistered){
        const users_log=JSON.parse(usersRegistered)
        const users=users_log.map((elem:any)=>{
          if(elem.username == usernameInput){
            this.router.navigate(['/'])
          }else{
            this.users.push(userData);
            localStorage.setItem('Users',JSON.stringify(this.users));
            this.router.navigate(['/'])
          }
        })
        }
    }
  }

  CheckUser(usernameInput: String,passwordInput:String){
    const userData = { username: usernameInput, password:passwordInput};
    if(localStorage.getItem("Users")){
      const usersRegistered=localStorage.getItem('Users')
      if(usersRegistered){
        const users_log=JSON.parse(usersRegistered)
        const users=users_log.map((elem:any)=>{
          if(elem.username == usernameInput){
            if(elem.password == passwordInput)
            this.router.navigate(['/user'])
          }else{
            this.router.navigate(['/register'])
          }
        })
      }
    }
  }

}

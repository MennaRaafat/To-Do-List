import { Injectable } from '@angular/core';
import { User } from './todos/models/todo';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  console = console;

  users:User[]=[]

constructor() { }

  createUser(userInput: String,quoteInput:String) {
    if (userInput.length!= 0 && quoteInput.length!=0) {
      const userData = { username: userInput, quote:quoteInput};
      this.users.push(userData);
    }
    this.console.log(this.users);
  }

    // getUserName(username:string) {
  //   return this.users.find((user)=> user.username)
  // }

}

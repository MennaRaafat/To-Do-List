import { Component, Input } from '@angular/core';

import { TodoComponent } from 'src/app/components/todo/todo.component' ;
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';
import { Todo } from './models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[]
})

export class TodosComponent {

data:String="";
todos!:Todo[];

constructor(private _user: UsersService, private _todo:TodosService) { 
  this.todos=this._todo.todos;
}

userQuote=this._user.users.map(el=>el.quote);

addTodo(){
this._todo.todoCreate(this.data);
 this.data="";
 console.log(this.todos);
};


// addFav(i:number){
//   this._todo.addFavourite(i);
//     }

// deleteTodo(id:number){
// this._todo.deleteTodo(id);
// }




}



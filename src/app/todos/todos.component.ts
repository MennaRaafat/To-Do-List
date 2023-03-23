import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { TodosService } from '../todos.service';
import { TodoComponent } from '../todo/todo.component';
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

// completedTodo(id:number){
// this.todos.map((elem,i)=>{
// if(id===i) elem.completed = !elem.completed;
// return elem;
// })
// }

}



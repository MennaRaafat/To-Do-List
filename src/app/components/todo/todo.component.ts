import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from '../todos/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  @Input()todo!:Todo;


constructor(private _router:Router, private _todo:TodosService) { }

addFav(i:number){
  this._todo.addFavourite(i);
    }

deleteTodo(id:number){
this._todo.deleteTodo(id);
}

navigateToDetails() {
  this._router.navigate(['/details' , this.todo.id]);
}
cTodo(id:number){
  this._todo.completeTodo(id);
}
}

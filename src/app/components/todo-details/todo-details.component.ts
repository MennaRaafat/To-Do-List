import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from '../todos/models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent {
id:number;
todo:any;

constructor(private _activateRoute:ActivatedRoute , private _todo:TodosService){

  this.id = this._activateRoute.snapshot.params['id'];
  this.todo = this._todo.getTodoById(this.id);

}
}

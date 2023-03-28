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
todo!:Todo;

constructor(private _activateRoute:ActivatedRoute , private _todo:TodosService){

  this.id = this._activateRoute.snapshot.params['id'];
  // this.todo = this._todo.getTodoById(this.id);

}

ngOnInit(): void {
  this.id = this._activateRoute.snapshot.params['id']
  this._todo.getOneTodo(this.id).subscribe((todo:any)=>{
    this.todo = todo.body
    console.log(this.todo);
  })
}

}

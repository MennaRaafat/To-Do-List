import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../todos/models/todo';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})

export class CompletedComponent {
 userComp:Todo[]=[];
constructor(private _compTodo:TodosService){
   this.userComp=this._compTodo.todoCompleted;
}

}

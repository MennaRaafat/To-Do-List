import { Component } from '@angular/core';
import { Todo } from './todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

todos :Todo[]=[];
inputToDo:String="";

deleteTodo(id:number){
this.todos.splice(id,1);
}

completedTodo(id:number){
this.todos.map((v,i)=>{
if(id==i) v.completed = !v.completed;
return v;
})
}

addTodo(){
  this.todos.push({
todo:this.inputToDo,
completed:false
  });
  this.inputToDo=" ";
}

}



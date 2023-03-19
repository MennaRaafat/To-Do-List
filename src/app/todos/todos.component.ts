import { Component } from '@angular/core';
import { Todo } from './todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

todos :Todo[]=[];
data:String="";

deleteTodo(id:number){
this.todos.splice(id,1);
}

completedTodo(id:number){
this.todos.map((elem,i)=>{
if(id===i) elem.completed = !elem.completed;
return elem;
})
}

addTodo(){
  this.todos.push({
todo:this.data,
completed:false
  });
  this.data=" ";
}

}



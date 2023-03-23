import { Injectable } from '@angular/core';
import { Todo } from './todos/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

todos: Todo[]=[];
todoFavourite:Todo[]=[]
totoDeleted:Todo[]=[]
  constructor() { }
  todoCreate(todoInput:String){
let id=0;
if(!this.todos.length){
  id=1;
}else{
  id=this.todos[this.todos.length-1].id+1
}

const todoData={id:id,todo:todoInput,completed:false}
if(todoData){
  this.todos.push(todoData);
  console.log(this.todos)
}

  }

  addFavourite(id:number){
const favTodo=this.todos.find(elem=>elem.id===id);
if(favTodo)
this.todoFavourite.push(favTodo);
console.log(favTodo)
  }

  deleteTodo(id:number){
  if(confirm("Are You Sure That You Want To Delete?")){
    const delTodo=this.todos.find(elem=>elem.id===id);
    if(delTodo){
      this.totoDeleted.push(delTodo);
        this.todos.forEach((value,index)=>{
            if(value.id==id)  {
              alert(value.todo + " is deleted");
              this.todos.splice(index,1);
            }
        });
    }
  }
  }
 
  getTodoById(id:any){
return this.todos.find(elem=>elem.id==id)
  }
}

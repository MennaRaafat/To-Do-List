import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

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

export class TodosComponent implements OnInit{

data:String="";
todos!:Todo[];
PostJsonValue:any;

constructor(private _user: UsersService, private _todo:TodosService,private _http:HttpClient) { 
  this.todos=this._todo.todos;
}

userQuote=this._user.users.map(el=>el.quote);

addTodo(){
this._todo.todoCreate(this.data);
console.log(this.todos);
 this.data="";
};

ngOnInit():void{
  this.getTodo()
  // this.postTodo()
}

getTodo() {
  this._todo.getAllTodos().subscribe(data=>{
    // console.log(data.todos)
    return data.todos
  })

}

postTodo(){
  this._todo.PostTodo().subscribe((data)=>{
    console.log(data);
    this.PostJsonValue=data;
  })
}

}





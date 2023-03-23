import { Injectable } from '@angular/core';
import { Todo } from '../components/todos/models/todo';
import { Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({name: 'round'})
export class TodosService {

  todos: Todo[] = [
    {
      
        id:1,
        todo:"Do something nice for someone I care about",
        completed:false
      
    }
  ];
  todoFavourite: Todo[] = []
  totoDeleted: Todo[] = []
  todoCompleted: Todo[] = []

  constructor() { }
  todoCreate(todoInput: String) {
    let id = 0;
    if (!this.todos.length) {
      id = 1;
    } else {
      id = this.todos[this.todos.length - 1].id + 1
    }

    const todoData = { id: id, todo: todoInput, completed: false }
    if (todoData) {
      this.todos.push(todoData);
      console.log(this.todos)
    }

  }

  addFavourite(id: number) {
    const favTodo = this.todos.find(elem => elem.id === id);
    if (favTodo)
    {
      this.todoFavourite.push(favTodo);
   
    }
  }
  totalFav() {
    let total;
    if (total) {
      return 0;
    }
    total=this.todoFavourite.length;
    return total;

  }

  deleteTodo(id: number) {
    if (confirm("Are You Sure That You Want To Delete?")) {
      const delTodo = this.todos.find(elem => elem.id === id);
      if (delTodo) {
        this.totoDeleted.push(delTodo);
        this.todos.forEach((value, index) => {
          if (value.id == id) {
            alert(value.todo + " is deleted");
            this.todos.splice(index, 1);
          }
        });
      }
    }
  }

  totalDel() {
    let total;
    if (total) {
      return 0;
    }
    total=this.totoDeleted.length;
    return total;

  }
  getTodoById(id: any) {
    return this.todos.find(elem => elem.id == id)
  }

  percompleted() {
    let total;
    if (total) {
      return 0;
    }
    total = (this.todoCompleted.length / this.todos.length) * 100;
    // let tperc = total + '%';
   let tperc= Math.floor(total)+'%';
    return tperc;

  }
  completeTodo(id: number) {
    this.todos.map((elem, i) => {
      if (id === i + 1) {
        elem.completed = !elem.completed;
        this.todoCompleted.push(elem);
      }
    })

  }

}

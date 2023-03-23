import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
console=console;

  constructor(public _todo:TodosService){}

 userFav= this._todo.todoFavourite.map(elem=>elem.todo);


//  addFav(i:number){
//   this._todo.addFavourite(i);
//     }

}

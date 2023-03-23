import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent {

constructor(public _todo:TodosService){}


}

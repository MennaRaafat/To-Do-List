import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { DeletedComponent } from './deleted/deleted.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'user',component:TodosComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'delete',component:DeletedComponent},
  {path:'details/:id',component:TodoDetailsComponent},
  // {path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

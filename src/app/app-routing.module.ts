import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CompletedComponent } from './components/completed/completed.component';
import { TodosComponent } from './components/todos/todos.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'delete',component:DeletedComponent},
  {path:'details/:id',component:TodoDetailsComponent},
  {path:'completed',component:CompletedComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:TodosComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

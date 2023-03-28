import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedComponent } from './components/completed/completed.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoInterceptorInterceptor } from './todo-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    NavbarComponent,
    FavouriteComponent,
    DeletedComponent,
    TodoComponent,
    TodoDetailsComponent,
    NotFoundComponent,
    CompletedComponent,
    RegisterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:TodoInterceptorInterceptor , multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

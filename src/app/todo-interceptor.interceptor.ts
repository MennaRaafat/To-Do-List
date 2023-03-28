import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodosService } from './services/todos.service';
import { TodoComponent } from './components/todo/todo.component';
// import { TodosComponent } from './components/todos/todos.component';

@Injectable()
export class TodoInterceptorInterceptor implements HttpInterceptor {

  constructor() {
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("this is inter.",request)
    let modifiedRequest = request.clone({headers:request.headers.append('auth' , 'x-acsses-token').append('userid' , '89')})
    return next.handle(modifiedRequest);
  }
}

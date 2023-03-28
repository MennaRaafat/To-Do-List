import { TestBed } from '@angular/core/testing';

import { TodoInterceptorInterceptor } from './todo-interceptor.interceptor';

describe('TodoInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TodoInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TodoInterceptorInterceptor = TestBed.inject(TodoInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

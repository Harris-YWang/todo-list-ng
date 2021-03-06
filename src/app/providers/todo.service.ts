import { Injectable } from '@angular/core';
import { Todo } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private data: Todo[] = [
    { id: 1, description: 'Sample', category: 1, content: 'Test' },
  ];
  constructor() {}

  getTodos(): Todo[] {
    return this.data;
  }
  delete(ids: number[]): Todo[] {
    this.data = this.data.filter(item => ids.indexOf(item.id) === -1);

    return this.data;
  }

  getTodo(id: number): Todo {
    return this.data.find(item => item.id === id);
  }

  addTodo(todo: Partial<Todo>): Todo[] {
    const id = parseInt(Math.random() * 1000000 + '', 10);
    const newTodo = { ...todo, id } as Todo;

    this.data = [...this.data, newTodo];

    return this.data;
  }
}

import { Injectable } from "@angular/core";
import { Todo } from "../interface";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private data: Todo[] = [
    { id: 999, description: "For test purpose", category: 1, content: "test" },
    { id: 2, description: "For test purpose", category: 1, content: "test" }
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
    return this.data.find(item =>item.id === id);
  }
}

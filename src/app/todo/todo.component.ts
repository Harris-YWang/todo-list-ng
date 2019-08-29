import { Component, OnInit } from "@angular/core";
import { Todo } from "../interface";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    { id: 999, description: "For test purpose", category: 1, content: "test" },
    { id: 2, description: "For test purpose", category: 1, content: "test" }
  ];

  todoList2: Todo[] = [
    { id: 1, description: "For test purpose", category: 1, content: "test" },
    { id: 3, description: "For test 2 purpose", category: 1, content: "test" }
  ];
  constructor() {}

  ngOnInit() {}

    delete(ids: number[]) {
    this.todoList = this.todoList.filter(item => ids.indexOf(item.id) === -1);
  }
}

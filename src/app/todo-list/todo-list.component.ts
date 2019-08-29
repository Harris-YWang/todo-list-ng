import { Component, OnInit } from "@angular/core";
import { Todo } from "../interface";
import { Router, ActivatedRoute } from "@angular/router";
interface PrivateTodo extends Todo {
  selected?: boolean;
}
@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  todos: PrivateTodo[] = [
    { id: 999, description: "For test purpose", category: 1, content: "test" },
    { id: 2, description: "For test purpose", category: 1, content: "test" }
  ];

  selectAll = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  delete(ids: number[]) {
    this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  }
  toggleAll() {
    console.log(this.selectAll);
    this.todos.forEach(item => (item.selected = this.selectAll));
  }
  check() {
    this.selectAll = this.todos.every(item => item.selected);
  }
  deleteSelected() {
    const ids = this.todos.filter(item => item.selected).map(item => item.id);

    this.delete(ids);
  }
  navigateTo(todo: PrivateTodo, event: MouseEvent) {
    if (event.target instanceof HTMLTableCellElement) {
      this.router.navigate([todo.id], { relativeTo: this.route });
    }
  }
}

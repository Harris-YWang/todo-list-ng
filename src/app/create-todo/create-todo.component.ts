import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { Category as Cate } from "../interface";
interface Category {
  id: number;
  name: string;
}

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.scss"]
})
export class CreateTodoComponent implements OnInit {
  form: FormGroup;
  categories: Category[] = [
    { id: 0, name: Cate[0] },
    { id: 1, name: Cate[1] },
    { id: 2, name: Cate[2] }
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      description: "",
      category: "",
      content: ""
    });
  }

  submit() {
    console.log(this.form.value);
  }

  get description(): AbstractControl {
    return this.form.get("description");
  }

  get category(): AbstractControl {
    return this.form.get("category");
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Category as Cate, Todo } from '../interface';
interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  form: FormGroup;
  categories: Category[] = [
    { id: 0, name: Cate[0] },
    { id: 1, name: Cate[1] },
    { id: 2, name: Cate[2] },
    { id: 3, name: Cate[3] },
  ];

  @Output()
  create: EventEmitter<Partial<Todo>> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(15)]],
      category: ['', [Validators.required, Validators.required]],
      content: '',
    });
  }

  submit() {
    this.create.next({ ...this.form.value, category: +this.category.value });
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get category(): AbstractControl {
    return this.form.get('category');
  }
}

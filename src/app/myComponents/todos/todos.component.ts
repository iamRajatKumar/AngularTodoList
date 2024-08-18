import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos:Todo[];
  constructor() { 
    this.todos = [
      {
        sno: 1,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "Description",
        active: true
      },
      {
        sno: 3,
        title: "This is title3",
        desc: "Description",
        active: true
      }
    ]
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }
}

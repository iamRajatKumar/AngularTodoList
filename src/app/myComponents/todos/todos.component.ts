import { Component } from '@angular/core';
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
export class TodosComponent{
  
  //localItem!: string;
  todos:Todo[] = [];
  constructor() { 
    this.todos=[
    { 
      sno: 1,
      title: "Office",
      desc: "Office from 9-6",
      active: true 
    },
    {
      sno: 2,
      title: "Gym",
      desc: "gym time 7-8, (1 hour)",
      active: true,
    },
    {
      sno: 3,
      title: "Music Practice",
      desc: "Guitar Practice and singing 30 minutes, time 8:15 to 8:45 ",
      active: true,
    },
    {
      sno: 4,
      title: "Learning",
      desc: "Learn Angular 9-10, 1 hour ",
      active: true,
    },
    {
      sno: 5,
      title: "Revision",
      desc: "Revision of Backend Languages (Java, Express)",
      active: true,
    },
    {
      sno: 6,
      title: "Hands On",
      desc: "Development project Hands on",
      active: true
    }
    ];
  //   if(typeof localStorage !== 'undefined'){
  //   this.localItem! = localStorage.getItem('todos')!;
  //   if(this.localItem) {
  //     this.todos=[];
  //   }
  // }
  //   else{
      
  //     this.todos = JSON.parse(this.localItem);
  //   }
  }

  

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    //localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log("Added");
    this.todos.push(todo);
    alert("To Do Added Successfully!")
    //localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    //localStorage.setItem("todos", JSON.stringify(this.todos));
  }
 
}

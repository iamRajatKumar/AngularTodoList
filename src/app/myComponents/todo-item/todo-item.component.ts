import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent{
  
  @Input() todo! : Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("on Click has been triggerd")
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo); 
    console.log(todo)
  }
}

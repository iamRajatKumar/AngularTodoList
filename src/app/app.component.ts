import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./myComponents/todos/todos.component";
import { FooterComponent } from "./myComponents/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rajat-todo-list';
}

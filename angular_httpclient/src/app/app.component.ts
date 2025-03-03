import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './interfaces/todo.interface';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todosArray: Todo[] = [];

  todoTitle = '';

  loading= false;

  constructor(protected httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim())
    {
      return;
    }

    const newTodo:Todo = {
      completed: false,
      title: this.todoTitle
    }

    this.httpClient.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(response => {
        this.todosArray.unshift(response)
      })

    this.todoTitle = ''
  }

  fetchTodos() {
    this.loading = true;
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .pipe(delay(1000))
    .subscribe(response => {
      this.todosArray = response as Todo[];
      this.loading = false;
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './interfaces/todo.interface';
import { HttpClientService } from './services/httpclient.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClientService]
})
export class AppComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/todos'
  todosArray: Todo[] = [];

  todoTitle = '';

  loading= false;

  constructor(private httpClientService: HttpClientService<Todo>) {
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

    this.httpClientService.post<Todo>(this.url, newTodo)
      .subscribe(response => {
        console.log(response);
        this.todosArray.unshift(response)
      })

    this.todoTitle = ''
  }

  fetchTodos() {
    this.loading = true;
    this.httpClientService.getList<Todo>(this.url)
    .subscribe(response => {
      this.todosArray = response;
      this.loading = false;
    })
  }

  removeTodo(id?: number) {
    if (id === undefined) {
      return;
    }

    this.httpClientService.delete<Todo>(`${this.url}/${id}`)
    .subscribe(response => {
      console.log(response);
    })

    this.todosArray = this.todosArray.filter(item =>item.id != id);
  }

  completeTodo(id?: number) {
    if (id === undefined) {
      return;
    }

    const complteditem = this.todosArray.find(item => item.id == id);
    if (complteditem === undefined || complteditem === null) {
      return;
    }

    this.httpClientService.put(`${this.url}/${id}`, JSON.stringify(complteditem))
    .subscribe(response => complteditem.completed = true);

  }
}

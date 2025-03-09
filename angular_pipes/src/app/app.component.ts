import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { Observable } from 'rxjs';


export interface Post{
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, MultByPipe, ExMarksPipe, FormsModule, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  e: number = Math.E;

  str: string = 'hello world';

  date: Date = new Date();

  floatValue = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: 3
    }
  }

  posts: Post[] = [
    { title: 'Post1', text: 'This is first post'},
    { title: 'Post2', text: 'This is second post'},
    { title: 'Post3', text: 'This is third post'},
  ]

  search = '';

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => resolve('Promise resolved'), 5000);
  })

  currentDate: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date()), 1000
    })
  })
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from "./post3/post3.component";
import { Post4Component } from './post4/post4.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            PostComponent, 
            Post2Component, 
            Post3Component,
            Post4Component,
            FormsModule,
            CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42

  img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'

  inputValue = 'test'

  backgroundToggle = false
  toggle = false
  switchToggle:any = false

  arr = [1,2,3,4,5,6,7,10,20,30]

  objArr = [
    { title: "obj1", author: "auth1", comments: [
      {name: "commentator1", text: "good!"},
      {name: "commentator2", text: "bad!"},
    ]},
    { title: "obj2", author: "auth2", comments: [
      {name: "commentator3", text: "very good!"},
      {name: "commentator4", text: "very bad!"},
    ]}
  ]

  now: Date = new Date()

  constructor() {
    setTimeout(() => {
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    }, 5000);
  }

  onInput(event?:Event) {
    this.inputValue = (<HTMLInputElement>event?.target).value;
  }

  onBlur(str:string) {
    this.inputValue = str;
  }
}

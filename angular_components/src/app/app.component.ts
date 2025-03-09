import { Component } from '@angular/core';
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from "./post/post.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Post {
  title: string
  text: string
  id: number
}

@Component({
  selector: 'app-root',
  imports: [PostFormComponent, PostComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Title 1 for angular components', text: 'Looking for components', id: 1},
    {title: 'Title 2 for angular components', text: 'Still looking for components', id: 2},
    {title: 'Title 3', text: 'Now I know...', id: 3}
  ]

  addNewPost(post: Post) {
    const maxIdPost = this.posts.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current)
    post.id = maxIdPost.id + 1;
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id != id);
    console.log(this.posts);
  }
}

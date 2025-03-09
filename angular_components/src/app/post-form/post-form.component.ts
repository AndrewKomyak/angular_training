import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  title:string;
  text:string;

  @Output() onAdd: EventEmitter<Post> = new EventEmitter();

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const newPost: Post = {
        title: this.title,
        text: this.text,
        id: 0
      }

      this.onAdd.emit(newPost);
    }

    this.text = this.title = ''
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}

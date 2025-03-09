import { Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit, OnChanges {

  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef

  constructor() {}


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  ngOnInit(): void {
    console.log('ngOnInit');
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }
}

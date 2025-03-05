import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = 0;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    })
  }
  
  @Output() counterEmitter = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.counterEmitter.emit(this.counter);
  }

  decrease() {
    this.counter--;
    this.counterEmitter.emit(this.counter);
  }
}

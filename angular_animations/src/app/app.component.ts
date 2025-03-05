import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NganimateComponent } from "./nganimate/nganimate.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, NganimateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue' })),
      state('end', style({ background: 'red', transform: 'scale(1.2)' })),
      state('special', style({ background: 'orange', transform: 'scale(0.5)', borderRadius: '5%' })),
      transition('start <=> end', animate(1000)),
      transition('special <=> *', [
        style({ background: 'green' }),
        animate(1000, style({ background: 'red' }))]),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 1, transform: 'translateY(20px)' }))
    ])
  ])
]})
export class AppComponent {

  boxState = 'start';

  visible = true;

  animate() {
    if (this.boxState === 'start') {
      this.boxState = 'end';  
    } else {
      this.boxState = 'start';
    }
  }
}

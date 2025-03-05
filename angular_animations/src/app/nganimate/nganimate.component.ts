import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bounce, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-nganimate',
  imports: [CommonModule],
  styleUrl: './nganimate.component.scss',
  template: `<button (click)="visible = !visible">bounce</button>
  <hr>
  <div [@bounce] class="rect" *ngIf="visible"></div>`,
  animations: [
    trigger('bounce', [
      transition('void => *', [useAnimation(bounce)]),
      transition('* => void', [useAnimation(bounceOutUp)]),
    ])
  ]
})
export class NganimateComponent {
  visible = true;
}

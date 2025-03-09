import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { CommonModule } from '@angular/common';
import { IfnotDirective } from './directives/ifnot.directive';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, StyleDirective, CommonModule, IfnotDirective ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isVisible = true;
}

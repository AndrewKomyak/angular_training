import { Component } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ SwitchComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appState='on';


  handleModelChange() {
    console.log(this.appState);
  }
}

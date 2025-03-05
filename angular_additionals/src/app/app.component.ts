import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef) {

  }

  showModal() {
      const component = this.viewContainerRef.createComponent(ModalComponent)
      component.instance.title = "Unique Title!"
      component.instance.close.subscribe(() => this.viewContainerRef.clear())
  }
}

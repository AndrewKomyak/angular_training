import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent, CounterComponent],
  providers: [LocalCounterService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    protected counterService: AppCounterService,
    protected localCounterService: LocalCounterService) {

  }
}

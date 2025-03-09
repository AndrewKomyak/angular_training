import { Component } from '@angular/core';
import { AppCounterService } from '../services/app-counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  constructor(protected appCounterService: AppCounterService) {
    
  }
}

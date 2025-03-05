import { Component } from '@angular/core';
import { PageNamePipe } from '../../shared/page-name.pipe';

@Component({
  selector: 'app-home-page',
  imports: [PageNamePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}

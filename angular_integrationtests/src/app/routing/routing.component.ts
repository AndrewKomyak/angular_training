import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-routing',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id'] === '0') {
        this.router.navigate(['/404']);
      }});
  }

  goBack() {
    this.router.navigate(['/posts']);
  }
}

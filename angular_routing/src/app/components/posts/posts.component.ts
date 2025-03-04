import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  showIds = false;

  constructor(protected postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.showIds = <boolean>params['showIds']
    })
  }

  showIdsProg() {
    this.showIds = !this.showIds;
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: this.showIds
      }
    })
  }
}

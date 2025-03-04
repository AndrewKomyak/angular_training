import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Post, PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  imports: [ RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  post: Post;
  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.post = data['post']
    })

    //Alternative implementation without resolver
    //===========================================
    // this.route.params.subscribe((params: Params) => {
    //   if (params['id'] != null && params['id'] != undefined)
    //   {
    //     let post = this.postsService.getById(+params['id']);
    //     if (post != null && post != undefined)
    //     {
    //       this.post = post;
    //     }
    //   }
    // })
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}

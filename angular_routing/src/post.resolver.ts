import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { Post, PostsService } from "./app/services/posts.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class PostResolver implements Resolve<Post> {

    constructor(private postService: PostsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Post | RedirectCommand> {
        return <Post>this.postService.getById(+route.params['id']);
    }

}
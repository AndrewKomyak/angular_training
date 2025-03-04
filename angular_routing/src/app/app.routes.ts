import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { AuthGuard } from './auth.guard';
import { PostResolver } from '../post.resolver';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children:[{
        path: 'extra', component: AboutExtraComponent
        }] 
    },
    { path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
    { path: 'posts/:id', component: PostComponent, resolve: {
        post: PostResolver
    }},
    { path: '**', redirectTo: ''}
];

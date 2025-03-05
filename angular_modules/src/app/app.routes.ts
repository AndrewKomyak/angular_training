import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AboutExtraComponent } from './components/about-page/about-extra/about-extra.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {path: 'about', component: AboutPageComponent, children: [
        { path: 'extra', component: AboutExtraComponent}
        ]
    },
    { path: '', component: HomePageComponent, pathMatch: 'full'},
];

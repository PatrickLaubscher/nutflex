import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error404/error404.component';
import { MoviesTrendingComponent } from './movies-trending/movies-trending.component';
import { MoviesPopularComponent } from './movies-popular/movies-popular.component';
import { MoviesUpcomingComponent } from './movies-upcoming/movies-upcoming.component';
import { TvshowsListComponent } from './tvshows-list/tvshows-list.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'movies', component: MoviesListComponent},
    {path: 'movies/trending', component: MoviesTrendingComponent},
    {path: 'movies/popular', component: MoviesPopularComponent},
    {path: 'movies/upcoming', component: MoviesUpcomingComponent},
    {path: 'tvshows', component: TvshowsListComponent},
    {path: '**', component: Error404Component}
];

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, Movie, MoviesList } from '../entities';



@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private http = inject(HttpClient);

  authen(): Observable<Auth> {
    return this.http.get<Auth>("https://api.themoviedb.org/3/authentication");
  }

  fetchAllPopularMovies(): Observable<MoviesList> {
  return this.http.get<MoviesList>("https://api.themoviedb.org/3/movie/popular");
  }

  fetchAllTrendingMovies(): Observable<MoviesList> {
    return this.http.get<MoviesList>("https://api.themoviedb.org/3/trending/movie/day?");
  }

  fetchAllUpcomingMovies(): Observable<MoviesList> {
    return this.http.get<MoviesList>("https://api.themoviedb.org/3/movie/upcoming");
    }

  fetchOneMovie(idMovie: number): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${idMovie}`);
  }

}

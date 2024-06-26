import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ApiMoviesService } from '../shared/services/api-movies.service';
import { Auth, Movie, MoviesList } from '../shared/entities';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieModalComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  movieService = inject(ApiMoviesService);

  moviesList: MoviesList | null = null;
  auth: Auth | null = null;

  fetchAllMovies() {
    this.movieService.fetchAllPopularMovies().subscribe((moviesList:MoviesList) => {this.moviesList = moviesList});
  }

  ngOnInit(): void {
    this.fetchAllMovies();
  }

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { ApiMoviesService } from '../shared/services/api-movies.service';
import { MoviesList } from '../shared/entities';

@Component({
  selector: 'app-movies-trending',
  standalone: true,
  imports: [CommonModule, MovieModalComponent],
  templateUrl: './movies-trending.component.html',
  styleUrl: './movies-trending.component.css'
})
export class MoviesTrendingComponent {
  movieService = inject(ApiMoviesService);

  moviesList: MoviesList | null = null;

  fetchAllMovies() {
    this.movieService.fetchAllTrendingMovies().subscribe((moviesList:MoviesList) => {this.moviesList = moviesList; console.log(this.moviesList)});
  }

  ngOnInit(): void {
    this.fetchAllMovies();
  }

}

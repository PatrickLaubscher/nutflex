import { Component, inject } from '@angular/core';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { ApiMoviesService } from '../shared/services/api-movies.service';
import { MoviesList } from '../shared/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-popular',
  standalone: true,
  imports: [CommonModule, MovieModalComponent],
  templateUrl: './movies-popular.component.html',
  styleUrl: './movies-popular.component.css'
})
export class MoviesPopularComponent {
  movieService = inject(ApiMoviesService);

  moviesList: MoviesList | null = null;

  fetchAllMovies() {
    this.movieService.fetchAllPopularMovies().subscribe((moviesList:MoviesList) => {this.moviesList = moviesList; console.log(this.moviesList)});
  }

  ngOnInit(): void {
    this.fetchAllMovies();
  }


}

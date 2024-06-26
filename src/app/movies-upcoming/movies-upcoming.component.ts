import { Component, inject } from '@angular/core';
import { ApiMoviesService } from '../shared/services/api-movies.service';
import { CommonModule } from '@angular/common';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { MoviesList } from '../shared/entities';

@Component({
  selector: 'app-movies-upcoming',
  standalone: true,
  imports: [CommonModule, MovieModalComponent],
  templateUrl: './movies-upcoming.component.html',
  styleUrl: './movies-upcoming.component.css'
})
export class MoviesUpcomingComponent {
  movieService = inject(ApiMoviesService);

  moviesList: MoviesList | null = null;

  fetchAllMovies() {
    this.movieService.fetchAllUpcomingMovies().subscribe((moviesList:MoviesList) => {this.moviesList = moviesList; console.log(this.moviesList)});
  }

  ngOnInit(): void {
    this.fetchAllMovies();
  }

}

import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../shared/entities';
import { ApiMoviesService } from '../shared/services/api-movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.css'
})
export class MovieModalComponent implements OnInit, OnDestroy {
  movieService = inject(ApiMoviesService);
  @Input() i!: number;
  @Input() idMovie!: number;

  movie: Movie | undefined;
  dataMovie!:Subscription;

  fetchOneMovie() {
    this.dataMovie = this.movieService.fetchOneMovie(this.idMovie)
      .subscribe((movie:Movie) => {this.movie = movie});;
  }
  
  ngOnInit(): void {
    this.fetchOneMovie();
  }

  ngOnDestroy(): void {
    this.dataMovie.unsubscribe();
  }

}

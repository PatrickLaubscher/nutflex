import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { ApiTvshowsService } from '../shared/services/api-tvshows.service';
import { TvshowsList } from '../shared/entities';
import { TvshowModalComponent } from '../tvshow-modal/tvshow-modal.component';

@Component({
  selector: 'app-tvshows-list',
  standalone: true,
  imports: [CommonModule, TvshowModalComponent],
  templateUrl: './tvshows-list.component.html',
  styleUrl: './tvshows-list.component.css'
})
export class TvshowsListComponent {
  tvshowService = inject(ApiTvshowsService);

  tvshowsList: TvshowsList | null = null;

  fetchAllTvshows() {
    this.tvshowService.fetchAllPopularTvshows().subscribe((tvshowsList:TvshowsList) => {this.tvshowsList = tvshowsList});
  }

  ngOnInit(): void {
    this.fetchAllTvshows();
  }

}

import { Component, inject, Input } from '@angular/core';
import { ApiTvshowsService } from '../shared/services/api-tvshows.service';
import { Tvshow } from '../shared/entities';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tvshow-modal',
  standalone: true,
  imports: [],
  templateUrl: './tvshow-modal.component.html',
  styleUrl: './tvshow-modal.component.css'
})
export class TvshowModalComponent {
  tvshowService = inject(ApiTvshowsService);
  @Input() i!: number;
  @Input() idTvshow!: number;

  tvshow: Tvshow | undefined;
  dataTvshow!:Subscription;

  fetchOneTvshow() {
    this.dataTvshow = this.tvshowService.fetchOneTvshow(this.idTvshow)
      .subscribe((tvshow:Tvshow) => {this.tvshow = tvshow});;
  }
  
  ngOnInit(): void {
    this.fetchOneTvshow();
  }

  ngOnDestroy(): void {
    this.dataTvshow.unsubscribe();
  }
}

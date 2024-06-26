import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tvshow, TvshowsList } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class ApiTvshowsService {

  private http = inject(HttpClient);

  fetchAllPopularTvshows(): Observable<TvshowsList> {
    return this.http.get<TvshowsList>("https://api.themoviedb.org/3/tv/popular");
  }

  fetchOneTvshow(idTvshow: number): Observable<Tvshow> {
    return this.http.get<Tvshow>(`https://api.themoviedb.org/3/tv/${idTvshow}`);
  }

}

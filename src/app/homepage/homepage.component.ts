import { Component } from '@angular/core';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

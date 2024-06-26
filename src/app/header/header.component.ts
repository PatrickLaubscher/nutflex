import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  display:boolean = true;
  changeDisplayBtn:string = "Go to TV Shows";

  constructor(private router: Router){}

  changeDisplay() {
    this.display = !this.display;
    this.changeDisplayBtn = this.display ? "Go to TV Shows" : "Go to Movies";

    if(this.display === false) {
      this.router.navigate(['tvshows']);
    } else {
      this.router.navigate(['movies']);
    }
  }

  

}

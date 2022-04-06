import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../shared/models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] =[];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((result: Movie[]) => {
      this.popularMovies = result;
    });
    this.moviesService.getMovies('top_rated').subscribe((result: Movie[]) => {
      this.topRatedMovies = result;
    });
    this.moviesService.getMovies('upcoming').subscribe((result: Movie[]) => {
      this.upcomingMovies = result;
    });
  }
}

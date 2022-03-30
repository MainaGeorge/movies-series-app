import { MovieDto } from './../../shared/models/movie.dto';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from './../../shared/models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies = [];
  popularMovies: Movie[] =[];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((result: Movie[]) => {
      this.popularMovies = result;
      console.log(this.movies);
    });
    this.moviesService.getMovies('top_rated').subscribe((result: Movie[]) => {
      this.topRatedMovies = result;
      console.log(this.movies);
    });
    this.moviesService.getMovies('upcoming').subscribe((result: Movie[]) => {
      this.upcomingMovies = result;
      console.log(this.movies);
    });
  }
}

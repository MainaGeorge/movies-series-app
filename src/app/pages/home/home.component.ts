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
    this.moviesService.getMovies('popular').subscribe((result: any) => {
      this.popularMovies = result.results;
      console.log(this.movies);
    });
    this.moviesService.getMovies('top_rated').subscribe((result: any) => {
      this.topRatedMovies = result.results;
      console.log(this.movies);
    });
    this.moviesService.getMovies('upcoming').subscribe((result: any) => {
      this.upcomingMovies = result.results;
      console.log(this.movies);
    });
  }
}

import { MovieDto } from './../../shared/models/movie.dto';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from './../../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPaginatedMovies(1);
  }

  paginate(event: any){
    this.getPaginatedMovies(event.page + 1);
  }

  getPaginatedMovies(pageNumber: number){
    this.moviesService.searchMovies(pageNumber).subscribe((movies) => (this.movies = movies.results));
  }
}

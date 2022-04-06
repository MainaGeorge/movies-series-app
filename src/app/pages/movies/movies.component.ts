import { MoviesService } from '../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];
  genreId: string | null = null;

  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe(({genreId}) => {
      if(genreId){
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      }else{
        this.getPaginatedMovies(1);
      }
    })
  }

  paginate(event: any){
    const page = event.page + 1;
    if(this.genreId){
      this.getMoviesByGenre(this.genreId, page)
    }else {
      this.getPaginatedMovies(page);
    }
  }

  getPaginatedMovies(pageNumber: number){
    this.moviesService.searchMovies(pageNumber).subscribe((movies) => (this.movies = movies.results));
  }

  getMoviesByGenre(id: string, page=1){
    this.moviesService.getMoviesByGenre(id, page).subscribe(movies => this.movies = movies);
  }
}

import { IMAGE_SIZES } from '../../constants/image-sizes';
import {Movie, MovieCredits, MovieImages, MovieVideo} from '../../shared/models/movie';
import { MoviesService } from '../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {first} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  imageSizes = IMAGE_SIZES;
  movieCredits: MovieCredits | null = null;
  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(first()).subscribe(({id}) => {
      this.initiateComponent(id);
    });
  }

  initiateComponent(id: string){
    this.getMovie(id);
    this.getMovieVideos(id);
    this.getMovieImages(id);
    this.getMovieCredits(id);
  }

  getMovie(id: string){
    this.movieService.getMovie(id).subscribe((movie) => this.movie = movie);
  }

  getMovieVideos(id: string){
    this.movieService.getMovieVideos(id).subscribe(movieVideos => this.movieVideos = movieVideos);
  }

  getMovieImages(id: string){
    this.movieService.getMovieImages(id).subscribe(images => this.movieImages = images);
  }

  getMovieCredits(id: string){
    this.movieService.getMovieCredits(id).subscribe(credits => this.movieCredits = credits);
  }

}

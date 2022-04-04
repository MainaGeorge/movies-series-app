import { IMAGE_SIZES } from './../../constants/image-sizes';
import { Movie, MovieVideo } from './../../shared/models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imageSizes = IMAGE_SIZES;
  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }


  getMovie(id: string){
    this.movieService.getMovie(id).subscribe((movie) => this.movie = movie);
  }

  getMovieVideos(id: string){
    this.movieService.getMovieVides(id).subscribe(movieVideos => this.movieVideos = movieVideos);
  }

}

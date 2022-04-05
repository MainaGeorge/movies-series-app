import { MovieDto } from '../shared/models/movie.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import {Movie, MovieCredits, MovieImages, MovieVideos} from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'bd7fa9e8de7ab57034a92174dffb692f';
  constructor(private http: HttpClient) {}

  getMovies(type:string = 'upcoming', count:number=12) : Observable<Movie[]> {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    ).pipe(switchMap((response:MovieDto) => of(response.results.slice(0, count))));
  }

  searchMovies(page:number) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`);
  }

  getMovie(id:string):Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideos>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap((res) => of(res.results)));
  }

  getMovieImages(id:string):Observable<MovieImages> {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string){
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
}

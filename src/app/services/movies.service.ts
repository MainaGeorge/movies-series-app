import { MovieDto } from './../shared/models/movie.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { Movie } from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'bd7fa9e8de7ab57034a92174dffb692f';
  constructor(private http: HttpClient) {}

  getMovies(type:string = 'upcoming', count:number=12) : Observable<Movie[]>{
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    ).pipe(switchMap((response:MovieDto) => of(response.results.slice(0, count))));
  }
}

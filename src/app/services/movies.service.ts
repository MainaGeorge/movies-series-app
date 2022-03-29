import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=bd7fa9e8de7ab57034a92174dffb692f&language=en-US&page=1'
    );
  }
}
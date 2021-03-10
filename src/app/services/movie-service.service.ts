import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  apiKey: string = '53474f81bb349bf9a69b1ac3ac1de674';

  constructor(public http: HttpClient) {
    console.log('Hello MovieServiceProvider Provider');
  }

  //Function that returns the current popular movies from the TMDb
  getPopularMovies(): Observable<any> {
    return this.http
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=' +
          this.apiKey +
          '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      )
      .pipe(map((res) => res));
  }
  //Function that returns movies that are currently showing in Cinemas from the TMDb
  getInTheaters() {
    return this.http
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=' +
          this.apiKey +
          '&language=en-US&primary_release_date.gte=2017-04-15&primary_release_date.lte=2017-12-25&include_adult=false&include_video=false&page=1'
      )
      .pipe(map((res) => res));
  }

  searchMovies(searchStr: string) {
    return this.http
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=' +
          this.apiKey +
          '&query=' +
          searchStr +
          '&language=en-US&primary_release_date.gte=2017-04-15&primary_release_date.lte=2017-12-25&include_adult=false&include_video=false&page=1'
      )
      .pipe(map((res) => res));
  }
  getMovie(id) {
    return this.http
      .get(
        'https://api.themoviedb.org/3/movie/' +
          id +
          '?api_key=' +
          this.apiKey +
          '&language=en-US'
      )
      .pipe(map((res) => res));
  }

  //Returns a the list of genres in TMDB
  getGenres() {
    return this.http
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=' +
          this.apiKey +
          '&language=en-US'
      )
      .pipe(map((res) => res));
  }

  //Returns a list of movies with a specified genre
  getMoviesByGenre(genreId) {
    return this.http
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=' +
          this.apiKey +
          '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' +
          genreId
      )
      .pipe(map((res) => res));
  }
}

import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'df56e7b873c3e8bf3fc0e34d1b190f8d';

  constructor(private http: HttpClient) { }

  getTrendingMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }
}

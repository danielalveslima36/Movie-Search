import { Tv } from './../model/tv';
import { Movie } from '../model/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjU2ZTdiODczYzNlOGJmM2ZjMGUzNGQxYjE5MGY4ZCIsInN1YiI6IjVjMjAzMWVmMGUwYTI2MzA5YWVjM2U3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qeLnUMlmp6OaPFt4ovNciBXDMwLo6L4QtNdxZhoar3w';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.apiKey}`
    })
  }

  getTrendingMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.baseUrl}/trending/movie/week`, {headers: this.httpOptions.headers}).pipe(
      map((res: any) => res['results'])
    );
  }

  getTrendingTv(): Observable<Tv[]>{
    return this.http.get<Tv[]>(`${this.baseUrl}/trending/tv/week`, {headers: this.httpOptions.headers}).pipe(
      map((res: any) => res['results'])
    );
  }
}

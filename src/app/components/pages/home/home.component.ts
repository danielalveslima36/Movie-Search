import { Movie } from '../../../model/movie';
import { MovieService } from './../../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private trendingMovie: Movie[] = [];
  constructor(private movieService: MovieService) {
   }

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((movies) => {
      this.trendingMovie = movies["results"]
      console.log(this.trendingMovie)
    })
  }

}

import { Tv } from './../../../model/tv';
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

  trendingMovie: Movie[] = [];
  trendingTv: Tv[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 20,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  constructor(private movieService: MovieService) {
   }

  ngOnInit(): void {
    this.loadMovies()
    this.loadTv()
  }

  loadMovies(){
    this.movieService.getTrendingMovies().subscribe((movie) => {
      this.trendingMovie = movie;
    })
  }

  loadTv(){
    this.movieService.getTrendingTv().subscribe((tv) => {
      this.trendingTv = tv;
    })
  }

}

import { Component, NgModule, OnInit } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieTitles:object = {};

  constructor(private service: AxiosService) { }

  ngOnInit(): void {
    this.service.getMovietitle().then(rep =>{
      this.movieTitles = rep
      console.log(this.movieTitles);

    });
  }
}

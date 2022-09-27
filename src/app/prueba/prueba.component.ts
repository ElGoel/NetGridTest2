import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../interfaces';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  anything: string[] = ['Hola', 'hi'];
  titles: Movies[] = [];
  query: string = 'search/?Title=';

  constructor(private dataMovies: MoviesService) {}

  ngOnInit(): void {
    this.dataMovies.getMovies(this.query, 'spiderman')
      .subscribe((moviesTitles: any) => {
      this.titles = moviesTitles.data;
      this.titles.sort((a, b) => a.Title.localeCompare(b.Title));
    });
  }
}

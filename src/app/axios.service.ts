import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  async getMovietitle(name?:string) {
    try {
      let url: string = `https://jsonmock.hackerrank.com/api/moviesdata/search/${name}`;
      const resp = await axios.get(url);
      const movies =resp.data;
      return movies.data;
    } catch (error) {
      console.log(error);
    }
  }
}

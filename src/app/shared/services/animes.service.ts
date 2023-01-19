import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }

  getAnimes(){
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=6");
    // https://kitsu.io/explore/anime
    // Hacer 5 galerias con lo diferentes tipos de anime..
  }

  getAnimes2(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count");
  }

  getAnimes3(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count");
  }

  getAnimes4(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating");
  }

  getAnimes5(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count");
  }

}

import { AnimeInterface } from './../../shared/models/Anime.interface';
import { AnimesService } from './../../shared/services/animes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public galleryList:AnimeInterface[]=[];
  public galleryList2:AnimeInterface[]=[];
  public galleryList3:AnimeInterface[]=[];
  public galleryList4:AnimeInterface[]=[];
  public galleryList5:AnimeInterface[]=[];

  constructor (private animesService:AnimesService){}

  ngOnInit (){
    this.animesService.getAnimes().subscribe((res:any)=>{
      this.galleryList=res.data;
    });

    this.animesService.getAnimes2().subscribe((res:any)=>{
      this.galleryList2 =res.data;
    });

    this.animesService.getAnimes3().subscribe((res:any)=>{
      this.galleryList3 =res.data;
    });
    
    this.animesService.getAnimes4().subscribe((res:any)=>{
      this.galleryList4 =res.data;
    });

    this.animesService.getAnimes5().subscribe((res:any)=>{
      this.galleryList5 =res.data;
    });
  }
}

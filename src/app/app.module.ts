import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimesComponent } from './pages/animes/animes.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './pages/home/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimesComponent,
    NavComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    HomeComponent,
    SliderComponent,
    ItemsComponent,
    ItemComponent,
    MovieComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, PaginatorModule, TabViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

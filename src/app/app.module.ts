import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HistoryComponent } from './components/history/history.component';
import { ProjectTypesComponent } from './components/project-types/project-types.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { CarouselModule } from 'primeng/carousel';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    HistoryComponent,
    ProjectTypesComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


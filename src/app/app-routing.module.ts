import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {ProjectTypesComponent} from "./components/project-types/project-types.component";
import {HistoryComponent} from "./components/history/history.component";
import {HomelandComponent} from "./components/homeland/homeland.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'project-types', component: ProjectTypesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'homeland', component: HomelandComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import {ProjectsModel} from "../../models/projects.model";
import {ClientService} from "../../services/client.service";
import {ProjectFilterModel} from "../../models/project-filter.model";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private clientService: ClientService) {}
  projects: ProjectsModel[] = [];
  filter = {
    upTo50: true,
    from50To100: true,
    from100To300: true,
    more300: true,
    sketch: true,
    built: true
  };
  minCompatibility: number = -1;
  maxCompatibility: number = 1000000;

  totalPages: number = 0;
  currentPage: number = 1;
  readonly limit: number = 12;
  ngOnInit() {
    this.clientService.getAllProjects()
      .subscribe(data => {
        this.totalPages = Math.ceil(data.data.length / this.limit);
      })
    this.loadEvents();
  }
  public loadEvents() {
    let  params = new HttpParams()
      .set('page', this.currentPage)
      .set('limit', this.limit)
      .set('compatibility[from]', this.minCompatibility)
      .set('compatibility[to]', this.maxCompatibility)
    if (this.filter.sketch) {
      params = params.append('development_id[]', '1');
    }
    if (this.filter.built) {
      params = params.append('development_id[]', '2');
    }
    this.clientService.getProjectFilter(params)
      .subscribe(data => {
        this.projects = data.data;
      });
  }

  applyFilter(): void {
    this.minCompatibility = -1;
    this.maxCompatibility = 1000000;
    if (this.filter.upTo50) {
      this.minCompatibility = 0;
      this.maxCompatibility = 50;
    }
    if (this.filter.from50To100) {
      if (this.minCompatibility == - 1) {
        this.minCompatibility = 50;
      }
      this.maxCompatibility = 100;
    }
    if (this.filter.from100To300) {
      if (this.minCompatibility == - 1) {
        this.minCompatibility = 100;
      } else if(this.filter.upTo50) {
        this.filter.from50To100 = true;
      }
      this.maxCompatibility = 300;
    }
    if (this.filter.more300) {
      if (this.minCompatibility == - 1) {
        this.minCompatibility = 300;
      } else if (this.filter.upTo50) {
        this.filter.from50To100 = true;
        this.filter.from100To300 = true;
      } else if (this.filter.from50To100) {
        this.filter.from100To300 = true;
      }
      this.maxCompatibility = 1000000;
    }
    this.loadEvents();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadEvents();
  }
}

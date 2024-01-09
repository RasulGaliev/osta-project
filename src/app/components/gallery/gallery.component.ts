import { Component } from '@angular/core';
import {ProjectsModel} from "../../models/projects.model";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private clientService: ClientService) {
  }
  projects: ProjectsModel[] = [];

  ngOnInit() {
    this.clientService.getAllProjects()
      .subscribe(data => {
        this.projects = data.data;
      });
  }
}``

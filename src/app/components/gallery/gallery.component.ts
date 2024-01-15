import { Component } from '@angular/core';
import {ProjectsModel} from "../../models/projects.model";
import {ClientService} from "../../services/client.service";
import {ProjectFilterModel} from "../../models/project-filter.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private clientService: ClientService) {
  }
  // filter: ProjectFilterModel = {
  //   developments: [
  //     // { id: 1, name: 'эскиз/фор-эскиз' },
  //     // { id: 2, name: 'построено' }
  //   ],
  //   compatibilityMin: 200,
  //   compatibilityMax: 300
  // };
  filter = {
    developments: [
      {
        id: 1,
        name: 'эскиз/фор-эскиз'
      },
      {
        id: 2,
        name: 'построено'
      }
    ],
    compatibilityMin: 5,
    compatibilityMax: 100
  };
  projects: ProjectsModel[] = [];

  ngOnInit() {
    // this.clientService.getAllProjects()
    //   .subscribe(data => {
    //     this.projects = data.data;
    //   });
    this.clientService.getProjectFilter(this.filter)
      .subscribe(data => {
        this.projects = data.data;
      });
  }
}``

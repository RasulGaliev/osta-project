import { Component } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute} from "@angular/router";
import {ProjectsModel} from "../../models/projects.model";

@Component({
  selector: 'app-definite-gallery',
  templateUrl: './definite-gallery.component.html',
  styleUrl: './definite-gallery.component.css'
})
export class DefiniteGalleryComponent {
  // @ts-ignore
  project: ProjectsModel;
  id: number = 0;
  constructor(private clientService: ClientService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
      })
    this.clientService.getProject(this.id)
      .subscribe(data => {
        this.project = data.data;
      });
  }
}

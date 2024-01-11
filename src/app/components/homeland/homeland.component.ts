import { Component } from '@angular/core';
import {HomelandModel} from "../../models/homeland.model";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-homeland',
  templateUrl: './homeland.component.html',
  styleUrl: './homeland.component.css'
})
export class HomelandComponent {
  homeland: HomelandModel[] = [];
  constructor(private clientService: ClientService) {}
  ngOnInit() {
    this.clientService.getAllHomeland()
      .subscribe(data => {
        this.homeland = data.data;
      })
  }
}

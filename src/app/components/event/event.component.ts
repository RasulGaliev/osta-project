import { Component } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {EventsModel} from "../../models/events.model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events: EventsModel[] = [];
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getAllEvents()
      .subscribe(data => {
        this.events = data.data;
      });
  }
}

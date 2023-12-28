import { Component } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute} from "@angular/router";
import {EventsModel} from "../../models/events.model";

@Component({
  selector: 'app-definite-event',
  templateUrl: './definite-event.component.html',
  styleUrl: './definite-event.component.css'
})
export class DefiniteEventComponent {

  // @ts-ignore
  event: EventsModel;
  id: number = 0;
  constructor(private clientService: ClientService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
      })
    this.clientService.getEvent(this.id)
      .subscribe(data => {
        this.event = data.data;
      })
  }
}

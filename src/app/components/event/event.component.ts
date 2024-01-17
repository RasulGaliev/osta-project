import { Component } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {EventsModel} from "../../models/events.model";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events: EventsModel[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  readonly limit: number = 12;
  constructor(private clientService: ClientService) {}
  ngOnInit() {
    this.clientService.getAllEvents()
      .subscribe(data => {
        this.totalPages = Math.ceil(data.data.length / this.limit);
        console.log("total", this.totalPages)
      })
    this.loadEvents();
  }
  loadEvents() {
    const params = new HttpParams()
      .set('page', this.currentPage)
      .set('limit', this.limit);
    this.clientService.getAllEventsPage(params)
      .subscribe(data => {
        this.events = data.data;
      });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.loadEvents();
  }



}

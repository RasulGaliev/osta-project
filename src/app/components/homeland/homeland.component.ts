import { Component } from '@angular/core';
import {HomelandModel} from "../../models/homeland.model";
import {ClientService} from "../../services/client.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-homeland',
  templateUrl: './homeland.component.html',
  styleUrl: './homeland.component.css'
})
export class HomelandComponent {
  homeland: HomelandModel[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  readonly limit: number = 12;
  constructor(private clientService: ClientService) {}
  ngOnInit() {
    this.clientService.getAllHomeland()
      .subscribe(data => {
        this.totalPages = Math.ceil(data.data.length / this.limit);
      })
    this.loadHomeland();
  }
  loadHomeland() {
    const params = new HttpParams()
      .set('page', this.currentPage)
      .set('limit', this.limit);
    this.clientService.getAllHomelandPage(params)
      .subscribe(data => {
        this.homeland = data.data;
      })
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.loadHomeland();
  }
}

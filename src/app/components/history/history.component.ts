import { Component } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {HistoryModel} from "../../models/history.model";

@Component({
  selector: 'app-history.model.ts',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  homelandPageUrl: string = '/homeland';
  // @ts-ignore
  history: HistoryModel;
  constructor(private clientService: ClientService) {
  }
  ngOnInit() {
    this.clientService.getHistory()
      .subscribe(data => {
        this.history = data.data;
      })
  }

}

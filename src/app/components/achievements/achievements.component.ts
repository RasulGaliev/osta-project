import { Component } from '@angular/core';
import {AchievementsModel} from "../../models/achievements.model";
import {ClientService} from "../../services/client.service";

interface Product {
  name: string;
  price: number;
  inventoryStatus: string;
  image: string;
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements: AchievementsModel[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getAllAchievements()
        .subscribe(data =>{
          this.achievements = data.data
        });

    this.responsiveOptions = [
      {
        breakpoint: '1279px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}

import { Component } from '@angular/core';
import {AchievementsModel} from "../../models/achievements.model";
import {AchievementsService} from "../../services/achievements.service";

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

  constructor(private achievementsService: AchievementsService) {}

  ngOnInit() {
    this.achievements = this.achievementsService.getAchievements();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
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

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return 0;
  }

}

import { Injectable } from '@angular/core';
import {AchievementsModel} from "../models/achievements.model";
@Injectable({
  providedIn: 'root'
})

export class AchievementsService {
  getAchievements(): AchievementsModel[] {
    return [
      {
        id: 1,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили1?'
      },
      {
        id: 2,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили2?'
      },
      {
        id: 3,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили3? '
      },
      {
        id: 4,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили4?'
      },
      {
        id: 5,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили5?'
      },
      {
        id: 6,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили2?'
      },
      {
        id: 7,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили3? '
      },
      {
        id: 8,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили4?'
      },
      {
        id: 9,
        photo: '../../assets/server/achievements/achievement1.png',
        text: 'Чем и за что наградили5?'
      }
    ];
  }
}


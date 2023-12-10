import { Injectable } from '@angular/core';
import {ReviewModel} from "../models/review.model";
@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  getReview(): ReviewModel[] {
    return [
      {
        id: 1,
        text: 'Очень крутая работа! Ребята молодцы! молодцы! молодцы! молодцы! молодцы! молодцы! молодцы!',
        author: 'Малик'
      },
      {
        id: 2,
        text: 'Это что-то невероятное!!! Спаибо огрооооооомно вашей команде))',
        author: 'Малика'
      },
      {
        id: 3,
        text: 'CуперПурескиии!!!',
        author: 'Мунир'
      },
      {
        id: 4,
        text: 'Шедеевр!',
        author: 'Мунавара'
      },
      {
        id: 5,
        text: 'Молодцы!!!',
        author: 'Габделнур'
      },
      {
        id: 6,
        text: 'Огромное красивое здание - шедевр архитектуры нашего времени. Очень атмосферное, аккуратное. Красиво как при свете солнца, так и при свете луны и прожекторов. Внутри все чисто и спокойно.',
        author: 'Бибинур'
      },
      {
        id: 7,
        text: 'Ляпота!!!',
        author: 'Фархат'
      },
      {
        id: 8,
        text: 'Вас по телеку показывали))',
        author: 'Фахерниса'
      }
    ];
  }
}


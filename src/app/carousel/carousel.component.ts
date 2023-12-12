// import { Component, Input, OnInit } from '@angular/core';
// import {AchievementsModel} from "../models/achievements.model";
//
// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css'],
// })
// export class CarouselComponent implements OnInit {
//   @Input() achievements: AchievementsModel[] = [];
//   currentIndex = 0;
//
//   ngOnInit(): void {
//     this.startAutoPlay();
//   }
//   private startAutoPlay(): void {
//     setInterval(() => {
//       this.next();
//     }, 3000); // Измените интервал, как вам нужно
//   }
//   next(): void {
//     this.currentIndex++;
//   }
//
//
//   prev(): void {
//     this.currentIndex =
//       this.currentIndex > 0
//         ? this.currentIndex - 1
//         : this.achievements.length - 1;
//   }
// }

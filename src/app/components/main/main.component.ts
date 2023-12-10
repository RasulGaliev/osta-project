import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../services/review.service";
import {ReviewModel} from "../../models/review.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  reviews: ReviewModel[] = [];
  currentIndex: number = 0;
  currentIndex2: number = 1;

  sliderImgUrl: string = './assets/images/main-page/main-block/slider/slider1.png';
  titleImgUrl: string = './assets/images/main-page/main-block/main-title/main-title.svg';

  aboutImgUrl: string = './assets/images/main-page/about-block/about-img/about-img.png';
  aboutIcon1Url: string = './assets/images/main-page/about-block/icons/about-icon1.png';
  aboutIcon2Url: string = './assets/images/main-page/about-block/icons/about-icon2.png';
  aboutIcon3Url: string = './assets/images/main-page/about-block/icons/about-icon3.png';

  reviewLogoUrl: string = './assets/images/main-page/review-block/logo/logo.svg';

  contactPhoneIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/phone.svg';
  contactEmailIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/email.svg';
  contactMapIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/map.svg';
  contactTelegramIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/telegram.svg';
  contactWhatsAppIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/whatsapp.svg';

  constructor(private route: ActivatedRoute,  private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviews = this.reviewService.getReview();

    setInterval(() => {
      this.updateReviews()
    }, 10000);
    
    // Подписываемся на изменения в route.params
    this.route.fragment.subscribe(fragment => {
      // fragment содержит значение фрагмента в URL
      if (fragment === 'target') {
        // Переместить пользователя к нужной секции страницы
        this.scrollToTarget();
      }
    });
  }
  // Метод для прокрутки к секции с идентификатором "target"
  scrollToTarget() {
    const targetElement = document.getElementById('target');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  updateReviews(): void {
    this.currentIndex += 2;
    this.currentIndex2 += 2;
    if (this.currentIndex >= this.reviews.length) {
      this.currentIndex = 0;
    }
    if (this.currentIndex2 >= this.reviews.length) {
      this.currentIndex2 = 1;
    }
  }

}

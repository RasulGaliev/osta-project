import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../services/review.service";
import {ReviewModel} from "../../models/review.model";
import {AchievementsModel} from "../../models/achievements.model";
import {AchievementsService} from "../../services/achievements.service";
import {EventsModel} from "../../models/events.model";
import {EventsService} from "../../services/events.service";
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  events: EventsModel[] = [];

  achievements: AchievementsModel[] = [];

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

  formNameIconUrl: string = './assets/images/main-page/contacts-block/form-icons/name.png';
  formPhoneIconUrl: string = './assets/images/main-page/contacts-block/form-icons/phone.png';
  formEmailIconUrl: string = './assets/images/main-page/contacts-block/form-icons/email.png';

  modelName: string = '';
  modelPhone: string = '';
  modelEmail: string = '';
  modelAgree: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private achievementsService: AchievementsService,
    private eventsService: EventsService,
    private formService: FormService
  ) {}
  ngOnInit() {
    this.events = this.eventsService.getEvents();
    this.reviews = this.reviewService.getReview();
    this.achievements = this.achievementsService.getAchievements();

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

  onSubmit(formData: any): void {
    // Вызывается при отправке формы
    this.formService.submitForm(formData).subscribe(
      (response) => {
        console.log('Успешно отправлено:', response);
        // Дополнительные действия при успешной отправке
      },
      (error) => {
        console.error('Ошибка отправки:', error);
        // Дополнительные действия при ошибке
      }
    );
  }

}

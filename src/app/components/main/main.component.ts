import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReviewModel} from "../../models/review.model";
import {AchievementsModel} from "../../models/achievements.model";
import {EventsModel} from "../../models/events.model";
import {EventsService} from "../../services/events.service";
import { FormService } from '../../services/form.service';
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  events: EventsModel[] = [];
  eventRouting: string = 'event';

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

  name: string = '';
  phone: string = '';
  email: string = '';
  data_transfer_condition: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private formService: FormService,
    private clientService: ClientService
  ) {}
  ngOnInit() {
    this.events = this.eventsService.getEvents();
    this.reviews = [];

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

    this.clientService.getAllReviews()
      .subscribe(data =>{
        this.reviews = data.data;
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

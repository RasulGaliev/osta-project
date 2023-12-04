import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  sliderImgUrl: string = './assets/images/main-page/main-block/slider/slider1.png';
  titleImgUrl: string = './assets/images/main-page/main-block/main-title/main-title.svg';
  aboutImgUrl: string = './assets/images/main-page/about-block/about-img/about-img.png';
  aboutIcon1Url: string = './assets/images/main-page/about-block/icons/about-icon1.png';
  aboutIcon2Url: string = './assets/images/main-page/about-block/icons/about-icon2.png';
  aboutIcon3Url: string = './assets/images/main-page/about-block/icons/about-icon3.png';

  contactPhoneIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/phone.svg';
  contactEmailIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/email.svg';
  contactMapIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/map.svg';
  contactTelegramIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/telegram.svg';
  contactWhatsAppIconUrl: string = './assets/images/main-page/contacts-block/contact-icons/whatsapp.svg';

}

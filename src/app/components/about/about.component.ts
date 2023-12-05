import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutIcon1Url: string = './assets/images/about-page/about-block/icons/about-icon1.svg';
  aboutIcon2Url: string = './assets/images/about-page/about-block/icons/about-icon2.svg';
  aboutIcon3Url: string = './assets/images/about-page/about-block/icons/about-icon3.svg';

  logoUrl: string = './assets/images/about-page/information-block/logo/logo.svg';
}

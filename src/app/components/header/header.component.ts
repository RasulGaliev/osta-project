import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl: string = './assets/images/logo/logo.svg';

  mainPageUrl: string = '';
  aboutPageUrl: string = 'about';
  galleryPageUrl: string = 'gallery';
  typesPageUrl: string = 'project-types';
  historyPageUrl: string = 'history';
  contactsPageUrl: string = '';
}

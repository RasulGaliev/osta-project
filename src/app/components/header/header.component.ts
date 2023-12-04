import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl: string = './assets/images/logo/logo.svg';
  mainPageUrl: string = '#';
  aboutPageUrl: string = '#';
  galleryPageUrl: string = '#';
  typesPageUrl: string = '#';
  historyPageUrl: string = '#';
  contactsPageUrl: string = '#';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-project-types',
  templateUrl: './project-types.component.html',
  styleUrl: './project-types.component.css'
})
export class ProjectTypesComponent {
  buildIconUrl: string = './assets/images/project-types-page/project-types-block/icon/build.svg';

  houseMainImgUrl: string = './assets/images/project-types-page/house-block/house-main.png';
  houseGridImgUrl: string = './assets/images/project-types-page/house-block/house-grid.png';

  malImg1Url: string = './assets/images/project-types-page/mall-block/mall1.png';
  malImg2Url: string = './assets/images/project-types-page/mall-block/mall2.png';
  malImg3Url: string = './assets/images/project-types-page/mall-block/mall3.png';

  factoryMainImgUrl: string = './assets/images/project-types-page/factory-block/factory-main.png';
  factoryGridImgUrl: string = './assets/images/project-types-page/factory-block/factory-grid.png';

  interiorMainImgUrl: string = './assets/images/project-types-page/interior-block/interior-main.png';
  interiorGridImgUrl: string = './assets/images/project-types-page/interior-block/interior-grid.png';
}

import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class SurveyPageComponent implements OnInit {
  images = ['01', '02', '03', '04'].map((n) => `../assets/images/toronto-image/toronto${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    
   }

  ngOnInit(): void {
  }

}

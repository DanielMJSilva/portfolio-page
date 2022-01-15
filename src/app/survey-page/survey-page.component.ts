import { Component, OnInit } from '@angular/core';
import { Survey } from './survey/survey.model';
import { fakeSurveyList } from '../fake-data';


@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {
  collapsed = true;

  surveys: Survey[] = [];

  constructor() {
 
    
   }

  ngOnInit(): void {
    this.surveys = fakeSurveyList;
  }

}

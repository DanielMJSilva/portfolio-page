import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey/survey.model';
import { fakeSurveyList } from '../../fake-data';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-survey',
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.css']
})
export class MySurveyComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // gets the is from url (ActivatedRoute)
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.surveys = fakeSurveyList;
  }

  onDeleteClicked(surveyId: string): void {
    alert(`Delete survey with id: ${surveyId}`)
  }

}

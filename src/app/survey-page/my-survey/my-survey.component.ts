import { Component, OnInit } from '@angular/core';
import { Question } from '../survey/questions/question.model';

@Component({
  selector: 'app-my-survey',
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.css']
})
export class MySurveyComponent implements OnInit {
questions! : Question[];

  constructor() { }

  ngOnInit(): void {
  }

}

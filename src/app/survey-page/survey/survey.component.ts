import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Survey } from './survey.model';
import { SurveyService } from '../survey.service';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null = null;
  toDate: NgbDate | null = null;

 surveyModel = new Survey('100','Title1', 'Description', new Date(2022-11-11),  new Date(2022-12-15), '', false )

  constructor(private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private _surveyService: SurveyService
  
    ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  onSubmit() {
    this._surveyService.createSurvey(this.surveyModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
  }
  // createSurvey(title: HTMLInputElement, description: HTMLTextAreaElement, youtube: HTMLInputElement, date: HTMLInputElement): boolean {
  //   console.log(`Adding project title: ${title.value}, link: ${link.value}, description: ${description.value}, youtube: ${youtube.value}, date: ${date.value}`);
  //   this.projects.push(new Project(title.value, link.value, description.value, youtube.value, date.value, 0));
  //   title.value = "";
  //   link.value = "";
  //   description.value = "";
  //   youtube.value = "";
  //   date.value = "";
  //   return false;
  // }

}

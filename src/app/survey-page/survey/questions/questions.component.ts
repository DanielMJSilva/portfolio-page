import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = 'row';
  // @Input() question!: Question;

  // questions!: Question[];

  // static id: number = 1;

  constructor() {
   }

  ngOnInit(): void {
    
  }

  // addQuestion(question: HTMLTextAreaElement, ansewer: any): boolean {
  //   console.log(`Adding Question: ${question.value}, answer: ${ansewer.value}`);
  //   this.questions.push(new Question(question.value, ansewer.value));
  //   return false;
  // }

 

}

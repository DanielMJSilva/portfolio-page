import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from './survey/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  _url ='';

  constructor( private _http: HttpClient) { }

  createSurvey(survey: Survey) {
    return this._http.post<any>(this._url, survey);
  }
}

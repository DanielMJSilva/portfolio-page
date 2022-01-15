import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

// import brads and solid font-awesome icons
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { ProjectComponent } from './portfolio/project/project.component';
import { SurveyComponent } from './survey-page/survey/survey.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { MySurveyComponent } from './survey-page/my-survey/my-survey.component';
import { QuestionsComponent } from './survey-page/survey/questions/questions.component';
import { EditSurveyComponent } from './survey-page/edit-survey/edit-survey.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ContactMeComponent,
    PortfolioComponent,
    ProjectComponent,
    SurveyComponent,
    SurveyPageComponent,
    MySurveyComponent,
    QuestionsComponent,
    EditSurveyComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // add library for multiples usage of font-awesome
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab, fas);
  }
 
 }

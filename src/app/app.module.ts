import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProjectComponent } from './portfolio/project/project.component';
import { SurveyComponent } from './survey-page/survey/survey.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { MySurveyComponent } from './survey-page/my-survey/my-survey.component';
import { QuestionsComponent } from './survey-page/survey/questions/questions.component';


const routes: Routes = [
   // basic routes
   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
   { path: 'welcome', component: WelcomeComponent },
   { path: 'contactme', component: ContactMeComponent},
   { path: 'portfolio', component: PortfolioComponent},
   { path: 'portfolio/survey-page', component: SurveyPageComponent},
   { path: 'portfolio/survey-page/mysurvey', component: MySurveyComponent},
]

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
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // # path
    { provide: APP_BASE_HREF, useValue: '/' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // add library for multiples usage of font-awesome
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab, fas);
  }
 
 }

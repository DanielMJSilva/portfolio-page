import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MySurveyComponent } from './survey-page/my-survey/my-survey.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditSurveyComponent } from './survey-page/edit-survey/edit-survey.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'contactme', component: ContactMeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/survey-page', component: SurveyPageComponent},
  { path: 'portfolio/survey-page/mysurvey', component: MySurveyComponent},
  { path: 'portfolio/survey-page/edit-survey/:id', component: EditSurveyComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // # path
    { provide: APP_BASE_HREF, useValue: '/' } 
  ],
})
export class AppRoutingModule { }

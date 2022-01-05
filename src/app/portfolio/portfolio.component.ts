import { Component } from '@angular/core';
import { Project } from './project/project.model';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects!: Project[];
  link: any;



  constructor () {
    this.projects=[new Project("Webpage_portfolio", "../assets/images/daniel.jpeg", "I create a portfolio webpage using Angular. \n I used many different features", "https://www.youtube.com/watch?v=ZDcMe-uMAXI", "Jan/2022", 5)];
  }


  addProject(title: HTMLInputElement, link: HTMLInputElement, description: HTMLTextAreaElement, youtube: HTMLInputElement, date: HTMLInputElement): boolean {
    console.log(`Adding project title: ${title.value}, link: ${link.value}, description: ${description.value}, youtube: ${youtube.value}, date: ${date.value}`);
    this.projects.push(new Project(title.value, link.value, description.value, youtube.value, date.value, 0));
    title.value = "";
    link.value = "";
    description.value = "";
    youtube.value = "";
    date.value = "";
    return false;
  }

  sortedProjects(): Project[] {
    return this.projects.sort((a: Project, b: Project) => b.votes - a.votes);
    }
    
}

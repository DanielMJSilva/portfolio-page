import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project.model';
import { PortfolioComponent } from '../portfolio.component';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css', '../portfolio.component.css']
})
export class AddProjectComponent implements OnInit {
title = 'Add project';
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  addProject(title: HTMLInputElement, link: HTMLInputElement, description: HTMLTextAreaElement, youtube: HTMLInputElement, date: HTMLInputElement): boolean {
    console.log(`Adding project title: ${title.value}, link: ${link.value}, description: ${description.value}, youtubeURL: ${youtube.value}, date: ${date.value},`);
    //this.projects.push(new Project(title.value,link.value,description.value, youtube.value, date.value, 0));
    title.value = "";
    link.value = "";
    description.value = "";
    youtube.value = "";
    date.value = "";
    return false;
  }

}


  

import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  project!: Project;
  link: any;


  constructor() {
  this.project = new Project(
      'Title1','http://link.com','description1','youtube1','date1', 10);
  
   }

  ngOnInit(): void {
  }

  voteUp() : boolean {
    this.project.votes +=1;
    return false;
  
  }
  
  voteDown() : boolean {
    this.project.votes -=1;
    return false;
  
  }

  // domain() is a utility function that extracts the domain from a URL
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
    return "";
    }
  }

}



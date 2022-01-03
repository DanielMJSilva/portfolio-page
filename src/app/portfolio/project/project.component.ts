import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() project!: Project


  constructor() {
 
   }

  ngOnInit(): void {
  }

  voteUp() : boolean {
    this.project.voteUp();
    return false;
  
  }
  
  voteDown() : boolean {
    this.project.voteDown();
    return false;
  
  }



}



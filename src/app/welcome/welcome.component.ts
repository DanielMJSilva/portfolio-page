import { Component, OnInit } from '@angular/core';

// Import icons
import { faLinkedin } from '@FortAwesome/free-brands-svg-icons';
import { faEnvelope } from '@FortAwesome/free-solid-svg-icons';
import { faGithub } from '@FortAwesome/free-brands-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html', 
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  backgroundIMG : string = "../assets/images/Toronto-image/toronto01.jpg"

  linkedin = faLinkedin;
  envelope = faEnvelope;
  github = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}

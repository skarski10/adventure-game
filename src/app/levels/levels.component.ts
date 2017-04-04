import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer.model';
import { Router } from '@angular/router';
import { StartComponent } from './start/start-component';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent {
  myPlayer = StartComponent.newPlayer;
  constructor (private router: Router) {}
  answers: Answer[] = [
    new Answer("Option 1", 1),
    new Answer("Option 2", 2),
    new Answer("Option 3", 3),
    new Answer("Option 4", 4)
  ];


  goToLevel2Page(clickedResponse: Answer) {
    this.router.navigate(['level2', clickedResponse.id]);
  };
}

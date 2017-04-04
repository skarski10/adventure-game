import { Component, OnInit } from '@angular/core';
import { Answer, Player } from '../game.model';
import { Router } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { playerInfo } from '../start/start.component';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
  providers: [AnswerService]

})
export class LevelsComponent implements OnInit {
  newPlayerInfo: Player[] = playerInfo;

  constructor (private router: Router, private answerService: AnswerService) {}
  answers: Answer[];

  ngOnInit(){
    this.answers = this.answerService.getAnswers();
  }

  goToLevel2aPage(clickedResponse: Answer) {
    this.router.navigate(['level2', clickedResponse.id]);
  };
}

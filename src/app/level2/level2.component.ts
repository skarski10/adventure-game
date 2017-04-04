import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Answer } from '../game.model';
import { StartComponent } from '../start/start.component';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
  providers: [AnswerService]
})

export class Level2Component implements OnInit {
  answerId: number;
  answerToDisplay: Answer;

  answers: Answer[] = [
    new Answer("Select 1", "Question2a", 1),
    new Answer("Select 2", "Question2a", 2)
  ];

  constructor(private route: ActivatedRoute, private location: Location, private answerService: AnswerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.answerId = parseInt(urlParameters['id']);
    });
    this.answerToDisplay = this.answerService.getAnswersById(this.answerId);
  }

}

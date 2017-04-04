import { Injectable } from '@angular/core';
import { Answer } from './game.model';
import { ANSWERS } from './level-answers';

@Injectable()
export class AnswerService {

  constructor() { }

  getAnswers() {
    return ANSWERS;
  }

  getAnswersById(answerId: number){
    for(var i = 0; i <= ANSWERS.length - 1; i++) {
      if(ANSWERS[i].id === answerId) {
        return ANSWERS[i];
      }
    }
  }
}

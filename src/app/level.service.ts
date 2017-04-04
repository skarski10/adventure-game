import { Injectable } from '@angular/core';
import { Level } from './level.model';
import { LEVEL1 } from './level1';

@Injectable()
export class LevelService {

  constructor() { }

  getLevel1() {
    return LEVEL1;
  }

  getSingleLevel1(id: number){
    for (let i = 0; i < LEVEL1.length; i++) {
        if(LEVEL1[i].id === id) {
          return LEVEL1[i];
      }
    }
  }

}

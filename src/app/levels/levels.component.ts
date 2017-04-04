import { Component, OnInit } from '@angular/core';
import { Level } from '../level.model';
import { LEVEL1 } from '../level1';
import { LevelService } from '../level.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css'],
  providers: [LevelService]
})
export class LevelsComponent implements OnInit{
  levels: Level[];

  constructor(private router: Router, private levelService: LevelService) { }

  ngOnInit(){
    this.levels = this.levelService.getLevel1();
  }

  goToSingleLevel(clickedLevel: Level) {
    this.router.navigate(['level-1', clickedLevel.id]);
  }
}

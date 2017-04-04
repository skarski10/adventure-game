import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Level } from '../level.model';
import { LEVEL1 } from '../level1';
import { LevelService } from '../level.service';


@Component({
  selector: 'app-level1next',
  templateUrl: './level1next.component.html',
  styleUrls: ['./level1next.component.css'],
  providers: [LevelService]
})
export class Level1nextComponent implements OnInit {
  level: Level;
  levelId: number;
  levels: Level[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private levelService: LevelService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.levelId = parseInt(urlParameters['id']);
    });

    this.level = this.levelService.getSingleLevel1(this.levelId);
    this.levels = this.levelService.getLevel1();
  }

}

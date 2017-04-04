import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Answer } from '../answer.model';
import { StartComponent } from './start/start-component';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {
  answerId: number;

  answers: Answer[] = [
    new Answer("Select 1", 1),
    new Answer("Select 2", 2),
    new Answer("Select 3", 3),
    new Answer("Select 4", 4)
  ];

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.answerId = parseInt(urlParameters['id']);
    });
  }

}

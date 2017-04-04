import { Component, OnInit } from '@angular/core';
import { Answer, Player } from '../game.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']

})
export class StartComponent implements OnInit {
  constructor(private router: Router) {}
  submitForm (name: string, gender: string) {
    var newPlayer = new Player(name, gender);
    playerInfo.push(newPlayer);
  }

  goToLevels(){
    this.router.navigate(['levels']);
  }
  ngOnInit() {
  }
}
  export var playerInfo: Player[] = [];

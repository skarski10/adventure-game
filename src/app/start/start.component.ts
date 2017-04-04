import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  newPlayer: Player;
  submitForm (name: string, gender: string) {
    this.newPlayer = new Player(name, gender);
  }

  constructor() { }

  ngOnInit() {
  }

}

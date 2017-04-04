export class Answer {
  constructor (public response: string, public nextQuestion: string, public id: number) { }
}

export class Player {
  public playerHealth: number = 100;
  constructor (public name: string, public gender: string) { }
}

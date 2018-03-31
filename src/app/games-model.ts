export class Game {
    constructor(
      public title: string,
      public imageLink: string,
      public price: number,
      public gameOfTheWeek: boolean,
      public owned: boolean,
      public qty: 1,
      public id?: string,
    ) { }
  }

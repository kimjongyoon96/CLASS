class Human {
  constructor(name) {
    this.name = name;
    this.choice = null;
  }
  makeChoice(choice) {
    this.choice = choice;
    console.log(`나의 선택은 ${choice}입니다`);
  }
}

let humanbeing = new Human();

export default Human;

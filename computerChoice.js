import Human from "./humanChoice.js";

class Computer extends Human {
  constructor(name) {
    super(name);
  }
  makeRandomChoce() {
    const choices = ["가위", "바위", "보"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.choice = choices[randomIndex];
    return this.choice;
  }
}

let Computer2 = new Computer();
Computer2.makeChoice();
console.log(Computer2.gethi());

export default Computer;

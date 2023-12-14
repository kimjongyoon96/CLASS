class Computer {
  constructor() {
    this.choice = null;
  }
  makeRandomChoce() {
    const choices = ["가위", "바위", "보"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.choice = choices[randomIndex];
  }
}

let Computer2 = new Computer();
Computer2.makeRandomChoce();

export default Computer;

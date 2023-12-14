import Human from "./humanChoice.js";
import Computer from "./computerChoice.js";

let gamePlayer = new Human();
let computerPlayer = new Computer();

class GameRogic {
  constructor(human, computer) {
    this.human = human;
    this.computer = computer;
  }
  determinWiner() {
    const humanchoose = this.human.choice;
    const computechoose = this.computer.choice;

    if (humanchoose === computechoose) {
      return "비겼습니다.";
    } else if (
      (humanchoose === "가위" && computechoose === "보") ||
      (humanchoose === "바위" && computechoose === "가위") ||
      (humanchoose === "보" && computechoose === "주먹")
    ) {
      return "이겼습니다";
    } else {
      return "졌습니다.";
    }
  }
  playGame() {
    this.human.makeChoice("가위");
    this.computer.makeRandomChoce();
    console.log(`사람:${this.human.choice},컴퓨터:${this.computer.choice}`);
    console.log(this.determinWiner());
  }
}
const game = new GameRogic(gamePlayer, computerPlayer);

game.playGame();

import Computer from "./computerChoice.js";

const computer = new Computer();
class GameRogic extends Computer {
  constructor(name) {
    super(name);
    // this.computer = computer;
  }
  determinWiner(humanchoose, computechoose) {
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
    console.log(super.makeChoice);
    const humanchoose = super.makeChoice("가위");
    const computechoose = super.makeRandomChoce();

    console.log(`사람:${humanchoose},컴퓨터:${computechoose}`);
    console.log(this.determinWiner(humanchoose, computechoose));
  }
}
const game = new GameRogic();

console.log(game.playGame());

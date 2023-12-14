class Human {
  constructor(name) {
    this.name = name;
    this.choice = null;
  }
  makeChoice(choice) {
    this.choice = choice;
    return `나의 선택은 ${choice}입니다`;
  }
  gethi() {
    return "hello";
  }
}
export default Human;

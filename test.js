class poketmon {
  constructor(name, type, hp) {
    this.name = name;
    this.type = type;
    this.hp = hp;
  }

  attack(move, method) {
    console.log(`${this.name}가 ${move}계열의 ${method}공격을 했다!`);
  }
  dogam(body, head, tail) {
    this.name = body;
    this.type = head;
    this.hp = tail;
    console.log(
      `이 포켓몬은 ${this.name}몸통과 ${this.type}모양과${this.hp}모양을 가졋따!`
    );
  }
}

const pikachu = new poketmon("피카츄", "뚱땡이", "100");
pikachu.attack("번개", "100만볼트");
pikachu.dogam("둥그런", "동글동글", "기다란꼬리");

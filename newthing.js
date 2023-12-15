class picachu {
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
  }
  attack() {
    if (this.name === "피카츄") {
      console.log("안녕 나는 피가츄다 음하하");
    }
  }
}
let pocketmon = new picachu("피카츄", "포켓몬", 18);

const handler = {
  get(target, property) {
    // 가로채고 있는 원본객체, 접근하려는 속성의 이름
    console.log(`${property}에 접근했다람쥐`);
    return target[property];
  },
};

let proxiedPockemon = new Proxy(pocketmon, handler);
console.log(proxiedPockemon);
proxiedPockemon.name;
proxiedPockemon.type;

pocketmon.attack();

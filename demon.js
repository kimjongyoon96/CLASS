function cute() {
  console.log("여기실행되냐");

  function real() {
    console.log("여기는 클로저 음하하");
  }
  return real;
}

let human = cute();

human();

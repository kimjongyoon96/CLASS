function demon() {
  let secret = "악마의 비밀";
  console.log("여기는 악마입니다.");

  function culsu() {
    console.log("철수는", secret, "에 도달할수있다 음하하");

    function jisoo() {
      console.log("저는 용사님 구해주시나요?", secret, "저도 알고있답니다..");
    }
    return jisoo;
  }
  return culsu;
}

// demon(); // 데몬함수는 철수를 실행시키지 않는다. 왜냐하면, 철수의 함수를 반환하는것이지, 실행시키지 않는다.
// 어떤 함수를 실행시킨다고 해서, 그 내부의 함수는 실행되지 않는다는 것을 기억하자.
// culsu(); // 철수 함수는 렉시컬 환경과, 지역스코프 환경으로 외부에서(demon 함수 밖) 접근이 불가능하다!
// 그렇다면 철수는, 클로저를 사용해야 한다!

let angel = demon();
let juice = angel();
juice(); // demon()을 angel이라는 변수에 할당한다. 이는, 단순하게 "이전" 하는 것이 아닌, 데몬함수를 호출한 것을 angel에 할당한것이다.
// 즉, angel()을 실행하게되면, 외부에서 실행하는 것이 아닌, demon 함수를 호출하면서, 클로저(함수의 변수에 대한 접근권) 를 가지게된다!!

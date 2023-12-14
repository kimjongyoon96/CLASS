class A {
  methodA() {
    console.log("A의 메소드");
  }
  get() {
    return "hello world";
  }
}

class B {
  methodB() {
    console.log("B의 메소드");
  }
}

class C extends A {
  methodC() {
    console.log("C의 메소드");
  }
}

const cInstance = new C();
cInstance.methodA(); // A의 메소드
cInstance.methodC(); // C의 메소드
console.log(cInstance.get());

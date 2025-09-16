// 상수(변할 수 없는 값)
const username = "조은솔"; 
// console.log 생성 방법(1) : 변수 선택 > Manage(톱니바퀴) > Command Palette(Ctrl+Shift+p) > turbo console insert legacy
// console.log("🚀 ~ username:", username);

// 상수(const)는 값 변경 불가능
// username = "존솔"; 
// console.log("🚀 ~ username:", username);

// 변수(변할 수 없는 값)
let usermbti = "ESFJ";
// console.log 생성 방법(2) : Manage > Keyboard Shortcuts > turbo console insert legacy > 사용자 정의 단축키 생성
// console.log("🚀 ~ usermbti:", usermbti);

// 변수(let)는 값 변경 가능
usermbti = "ISTP";
// console.log("🚀 ~ 변경된 usermbti:", usermbti);

// 데이터 타입
const num = 100
const str = "텍스트"
const bool = true
let empty1; // const empty1 = undefined;
const empty2 = null
console.log("num", typeof num)
console.log("str", typeof str)
console.log("bool", typeof bool)
console.log("empty1", typeof empty1)
console.log("empty2", typeof empty2)

/* null vs undefined
null : 개발자가 의도를 가지고 값을 비움
undefined : 개발자 의도와 상관없이 값이 없는 상태
*/

console.log("======================================================================")

// 함수

// 함수 정의(선언)
// 1. 기본 방식
function greeting1() {
  // 실행할 로직
  // 기본 console.log 작성
  // console.log("반갑습니다", username + "님!");
  // 백틱 방식
  console.log(`반갑습니다 ${username}님! 당신의 MBTI는 ${usermbti}군요!`)
}
// 2. 화살표 방식
const greeting2 = () => {console.log(`반갑습니다 ${username}님! 당신의 MBTI는 ${usermbti}군요!`)}

// 함수 호출(실행)
greeting1()
greeting2()

// 미션
function sayHello1(username) {
  console.log("반갑습니다.", username+"님")
}
const sayHello2 = (username) => {console.log(`반갑습니다. ${username}님`)}

sayHello1("좋은솔");
sayHello2("나쁜솔");

// 함수의 매개변수(parameter)와 인자(argument)
const sum = (num1, num2) => { // parameter : 함수를 정의할 때 사용되는 변수
  // 실행할 로직
  const result = num1 + num2;
  console.log("🚀 ~ sum ~ result:", result)
};

sum(11,22);

// return : 결과값 반환 및 함수 종료
const sum1 = (num1, num2) => { // parameter : 함수를 정의할 때 사용되는 변수
  // 실행할 로직
  const result = num1 + num2;
  console.log("return 시작!!!")
  return result
  console.log("return 끝!!!") // return 실행 후 함수가 종료되기 때문에 출력되지 않음
};

const add = sum1(11,22); // argument : 실제로 함수를 호출할 때 넘기는 변수값

const double = (num) => {
  return num * 2
};

const doubleResult = double(add);
console.log("🚀 ~ doubleResult:", doubleResult)

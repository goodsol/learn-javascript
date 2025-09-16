// 상수(변할 수 없는 값)
const username = "조은솔"; 
// console.log 생성 방법(1) : 변수 선택 > Manage(톱니바퀴) > Command Palette(Ctrl+Shift+p) > turbo console insert legacy
console.log("🚀 ~ username:", username);

/* 상수(const)는 값 변경 불가능
username = "존솔"; 
console.log("🚀 ~ username:", username);
*/

// 변수(변할 수 없는 값)
let usermbti = "ESFJ";
// console.log 생성 방법(2) : Manage > Keyboard Shortcuts > turbo console insert legacy > 사용자 정의 단축키 생성
console.log("🚀 ~ usermbti:", usermbti);

// 변수(let)는 값 변경 가능
usermbti = "ISTP";
console.log("🚀 ~ 변경된 usermbti:", usermbti);

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


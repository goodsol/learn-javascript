// 반복문

const numbers = [930116, 931219, 940428, 950825];
console.log("🚀 ~ numbers:", numbers)

// for(초기값; 반복조건식; 증감식) {반복수행문}
for (let i = 0; i < 10; i++) {
  console.log(`${i}번째 실행`)
}

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`🍀 ${i}: ${numbers[i]}`)
// }

// forEach: 배열 내장 함수, 향상된 for문
numbers.forEach((value, index) => {console.log(`🍀 ${index}: ${value}`)}) // 콜백 함수 : 다른 함수의 인자로 전달되는 함수

const ingredientList = ["🥬","🍅","🧀","🥓"]

let sandwich = "🥖"

ingredientList.forEach((item) => {
  sandwich += item
  console.log("🚀 ~ sandwich:", sandwich) // sandwich = sandwich + item
}) 

console.log("=======================================================================")

// 자주 사용하는 배열 함수
const students = ["alice", "bob", "david"]

// map: 기존 배열을 조작하여 새로운 배열을 return
// const upperStudents_basic = students.map((student) => {return student.toUpperCase()}) // 대문자화
// console.log("🚀 ~ upperStudents_basic:", upperStudents_basic)

const upperStudents = students.map((student) => student.toUpperCase()) // return 함수에 한해서 쓸 수 있는 축약 버전
console.log("🚀 ~ upperStudents:", upperStudents)

// filter : 배열 안의 요소들 중 조건식(return문에 씀)을 만족하는 배열의 요소들로 새로운 배열(조건에 부합하지 않을 땐 빈 배열)을 return
const filterStudents = students.filter((student) => student.length >= 4)
console.log("🚀 ~ filterStudents:", filterStudents)

// find : 배열 안의 요소들 중 조건식(return문에 씀)을 만족하는 첫 번째 요소(조건에 부합하지 않을 땐 undefined)를 return
const findStudents = students.find((student) => student.length >= 4)
console.log("🚀 ~ findStudents:", findStudents)

// some : 배열의 요소 중 하나라도 만족하면 true, 모든 요소가 만족하지 못하면 false (boolean타입) return
const someStudents = students.some((student) => student.startsWith('a'))
console.log("🚀 ~ someStudents:", someStudents)
// every : 배열의 모든 요소가 만족하면 true, 하나라도 만족하지 못하면 false (boolean타입) return
const everyStudents = students.every((student) => student.startsWith('a'))
console.log("🚀 ~ everyStudents:", everyStudents)

// 배열 함수들은 원본 배열에 영향을 미치지 않는다
console.log("🚀 ~ 원본 students:", students)
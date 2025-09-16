// 배열 : 순서가 있는 데이터의 집합
const day7 = ["월", "화", "수", "목", "금", "토", "일"]
console.log("🚀 ~ day7:", day7)
console.log("오늘의 요일:", day7[1]) // 배열의 index는 0부터 시작

const day6 = ["박성진", "강영현", "김원필", "윤도운"]
console.log("저의 최애 멤버는", day6[1] + "입니다")
console.log("데이식스의 막내는", day6[day6.length - 1] + "입니다")

// 객체 : key와 value로 구성된 속성들의 묶음 사전
const person = {
  name: "조은솔",
  isMale : false,
  mbti : "ESFJ"
}
console.log("🚀 ~ person:", person)
console.log("name:", person["name"])
console.log("남성 여부:", person.isMale)
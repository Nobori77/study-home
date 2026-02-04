let x = 3;
let y = 5;

console.log(x + y); //8
console.log(x - y); //-2
console.log(x * y); // 15
console.log(x / y); // 0.6
console.log(x % y); // 3

console.log(1 + "00"); // "100" 문자열
console.log('hello' + 100); // "hell100"

x += 2;
y -= 2;
console.log(x, y); // 5, 3
console.log(1 == 2); // false
console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(2 > 1); // true
console.log(NaN == NaN); // false : NaN 과 NaN 을 비교할수 없다.
console.log(Object.is(NaN, NaN)); // true
console.log(0 == -0); // true? console.log(0 == -0) 의 출력 결과는 true Object.is(0, -0)의 결과는 false를 반환
console.log(Object.is(0, -0)); // false

const age = 20;
console.log(age > 19 ? '관람가능' : '관람불가'); // 관람가능

console.log(true || false); // true : or 양쪽중 하나라도 true 라면 true
console.log(true&&false); // false : and 양쪽 모두 true 가 나와야 true
console.log(!true); // false

let a = 1, b = a + 1, c = b + 1;
console.log(c); // 3 : 쉼표연산자 , 쉼표대로 왼쪽부터 차례대로 연산

console.log((1+2) * (3+4)); // 21 : () <- 우선연산하게 만든다

console.log(typeof v10); // undefined

console.log(2**2); // 4 ** <- 연산곱합

let hong = {
  name: "홍길동",
  age: 20
};

console.log(hong?.name); // "홍길동"
console.log(hong?.hobby); // undefined :  값이 없으면 null 를 방지하기 위해 undefined 로 나오는 연산자

console.log(hong.name??"강감찬"); // "홍길동" : 좌항이 값이 있으면 출력 없으면 우항을 출력
console.log(hong.address??"서울시") // "서울시"

// 1. 연산자는 연산에 사용되는 기호 
// 2. 연산자는 피연산자의 개수에 따라 단항, 이항, 삼항으로 구분
// 3. 연산자 여럿이 함께 쓰이면 연산 우선순위를 가지며 () 가 연산순위가 가장 높음


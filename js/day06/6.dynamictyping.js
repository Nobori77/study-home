// (1) 동적타이핑
// 1) 동적타이핑이란 변수의 타입이 값에 따라 동적으로 결정되는 것을 말함
// 2) 자바스클비트는 변수에 할당되는 값의 타입에 따라 변수의 타입이 결정됨
// 3) 컴파일 언어
//     - 작성한 소스코들 기계어로 변환하기 위해 컴파일러가 목적코드를 생성하고
//     실행기가 목적코드를 기계어로 변환하여 실행
//     - 컴파일 언어는 컴파일 하기 전, 즉 소스코드 단계에서 변수의 타입이 결정되고
//     한번 결정된 변수의 타입은 변경될 수 없음
//     - 컴파일타임과 실행타임이 나누어져 실행됨
//     - 컴파일 언어들 : c, c++, c#, java, go..
// 4) 인터프리터 언어
//     - 인터프리터가 작성한 소스코드를 목적코드를 변환하면서 기계어로 변환해 실행
//     - 인터프리터 언어는 실행타임에 변수의 타입이 결정되고 변경될 수 있음
//     - 컴파일타임과 실행타임이 나누어져 있지 않음 (실행시간에 인터프리팅이 일어남)
//     - 인터프리터 언어들 : javascript, python, php, ruby...

// (2) 타입 확인
//   1) typeof 연산자
//     - typeof 연산자를 사용하면 변수의 타입을 알 수 있음
//     - 객체,배열,null, 정규 표현식의 경우 typeof연산의 결과는 Object

//   2) instanceof 연산자
//     - instanceof 연산자를 사용하면 변수의 상속관계를 알 수 있음
//     - instanceof 연산의 결과는 true 또는 false 중 하나

let l;
console.log(typeof l);

l = 1;
console.log(typeof l);

l = 'hello';
console.log(typeof l);

l = {};
console.log(typeof l);

l = null;
console.log(typeof l);

l = function() {};
console.log(typeof l);

const obj = {};
console.log(typeof obj);
console.log(obj instanceof Object);
console.log(obj instanceof Function)

const obj2 = null;
console.log(obj2 instanceof Object);
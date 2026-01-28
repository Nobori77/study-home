// 데이터 타입(Data Type)
// (1) 데이터 타입
// 1) 데이터 타입이란 값의 종류
// 2) 데이터 타입으 값을 저장하기 위한 메모리 공간의 크기
// 3) 모든 변수는 값과 타입을 가짐
// 4) 타입은 크게 기본 타입 (Primitive Type)과 참조타입(Reference Type) 으로 구분
// 5) 자바스크립트에서 변수의 데이터 타입은 값이 할당될 때 결정됨 (동적 타이핑)
//    ex ) let i = 0 ; [숫자타입] i = 'hello'; [문자타입]
// 6) ES6에서는 7개의 데이터 타입을 제공

// (2) ES6의 7개 데이터 타입
// 1) 숫자 (number) :  정수/실수 구분 없는 8바이트 부동소수점 수
//    -기타숫자 : Infinity, -Infinity, Nan (Not a Number)
// 2) 문자열(string) : 문자, 문자열 구분 없는 UTF-16인코딩된 2바이트 문자들의 집합
// - 문자열 표시 : , "", '', `` (백틱, ES6)
//    ex) let str = 'hello'; let str2 = 'javascript' let str3 = `${str} ${str2}`
//      -문자열은 변경불가능한 값 (immutable value)
//        ex) let str = 'hello'; let str2 = str + 'javascript';
// 3) 불리언(boolean) : true 또는 fasle의 값
// 4) undefined : var 키워드로 선언된 변수에 자동으로 할당되는 값
// 5) null : 값이 없을을 표시하기 위한 값
// 6) 심볼 (Symbol)
//  - 값이 변경이 불가능한 기본타입
//  - 중복되지 않는 유일한 값을 생성할때 사용 ex) 객체 프라파터의 키 생성
// 7) 객체 (object) : 객체, 함수, 배열 등 위 6가지가 아닌 모든 참조타입

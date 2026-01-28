// 숫자 타입

let num1 = 5;

let num2 = 3.14;

let num3 = 0b0010; // 2진수

let num4 = 0o010; // 8진수

let num5 = 0x01; // 16진수

let num6 = Infinity; // number타입

let num7 = -Infinity;

let num8 = NaN;

// 문자타입

let str1 = 'hello';

let str2 = "hello";

let str3 = `${str1} ${str2}`

// 불리언 타입
let bool1 = true;

let bool2 = false;

// 언디파인드 타입
let ud = undefined;

// 널 타입
let nu = null;

// 심볼 타입
let sb = Symbol();

// 레퍼런스 타입
let obj = {};

let arr = [];

let re = /abc/;

let func = function() {};

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const person = new Person('홍길동', 20);


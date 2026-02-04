const age = 20;

if(age > 19){
  console.log("20세 이상");
} else {
  console.log("20세 미만");
}

const score = 88;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let yoil = 3;
switch (yoil) {
  case 0: console.log("일요일");break;
  case 1: console.log("월요일");break;
  case 2: console.log("화요일");break;
  case 3: console.log("수요일");break;
  case 4: console.log("목요일");break;
  case 5: console.log("금요일");break;
  case 6: console.log("토요일");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++){
    console.log(`${i} * ${j} = ${i*j}`);
  }
}

let max = 100;
while (max > 0){
  console.log(max);
  max--;
}

let min = 0;
do{
  console.log(min);
  min++;
} while(min < 10);

for (let i = 0; i < 10; i++) {
  if(i % 2 === 0) continue;
  if(i === 7) break;
  console.log(i);
}

// 1. 조건문에는 if 문과 switch 문이 있다
// 2. 반복문에는 for, while, do ~ while 문이 있다
// 3. break 는 반복문이나 switch 문을 벗어날 때 사용된다
// 4. continue 는 다음번 반복을 수행하기 위해 사용된다

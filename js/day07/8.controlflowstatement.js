// 조건문 (Conditional Statement)
//  * 조건문은 주어진 조건에 따라 수행할 문장을 선택(분기)

// (1) if 
//   1) 조건식의 판별결과에 따라 수행할 문장을 선택
//   2) 형식 1: if ( 조건식 ) { 수행할문장 } else { 수행할문장 }
//     ex) if(aeg > 19) { console.log("20세 이상");} else {console.log("20세 미만");}
  
//   3) 형식 2: if ( 조건식 ) else if ( 조건식 ) else { 수행할 문장 }
//     ex) if(score > 90) {
//       console.log("A")
//     } else if (score > 80) {
//       console.log("B")
//     } else {
//       console.log("C");
//     }

// (2) switch
//   1) 표현식의 수행 결과로 나온 값에 따라 수행할 문장을 선택
//   2) 형식 : switch (표현식) {case 값: 수행할 문장 break; default: 수행할문장}
//     ex)
//       let a = 1;
//       switch (a) {
//         case 0:
//           console.log("a는 0");
//         break;
//         case 1:
//           console.log("a는 1");
//         break;
//         default:
//           console.log("a는 0도 1도 아님")
//       }

// 반복문 (Loop Statement)
//   * 반복문은 조건이 참인 동안 블록내의 코드를 반복적으로 수행

// (1) for
//   1) for문 수행단계
//     i) 초기식을 수행
//     ii) 판별식이 참이면 블럭내의 문장들을 반복수행
//     iii) 증감식을 수행
//     iv) 판별식이 참이면 반복수행할 문장을 수행
//     v) 판별식이 참인동안 iii)~iv)를 반복 수행
//   2) 형식 : for (초기식; 판별식; 증감식) { 반복수행할 문장 }
//     ex) 
//       for (let i = 0l i < 10; i++){
//         console.log(i)
//       }

// (2) while 
//   1) while 문은 조건이 참인 동안 블럭내의 문장들을 반복수행
//   2) 형식: while(조건식) {반복수행할 문장}
//   3) while 문 사용시 반복문을 빠져나갈 조건을 추가해야 함
  // ex) let i = 1;
  //   while(true){
  //     if(1==10) break;
  //     console.log(i);
  //     i++;
  //   }

// (3) do
//   1) while 문과 동일하게 작동하나 반복수행할 문장을 최소 한번은 수행
//   2) 형식 : do {반복수행할 문장} while (조건식);
//     ex) let i = 1;
//       do{
//         if(i==10) break;
//         console.log(i);
//         i++
//       }while(true);

// (4) break
//   1) break 문은 반복문을 빠져나갈때, switch 문을 빠져나갈때 사용
//   2) break 문을 만나면 무조건적으로 가장 가까운 반복문이나 switch문을 빠져나감

// (5) continue
//   1) 반복문내에서 다음 코드를 수행하지 않고 다음번 반복을 수행
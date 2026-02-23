/**
 * 문제: 2진수를 8진수로 변환해라
 *
 * 풀이과정
 * (처음 생각)
 * 1. 10진수로 변경 (0 to length-1 거꾸로 곱해준다)
 * 2. 8진수로 변경 (8로 계속 나누고 나머지 값을 쌓는다.)
 * -> 메모리초과뜸
 *
 * (검색후)
 * 세 자리구 2진수는 최대 7까지 나타낼 수 있어서 .. 세 자리씩 끊어서
 * 10진수로 변환하면 8진수가 된다.
 * 충격적 사실.. toString(8) 이렇게 하면 8진수로 변환됨
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString#%EC%8B%9C%EB%8F%84%ED%95%B4%EB%B3%B4%EA%B8%B0
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
 */

const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim();

// 1번 풀이 : 메모리 초과
// let ten = 0;

// for (let i = 0; i <= input.length - 1; i++) {
//   ten += Number(input[i]) * 2 ** (input.length - 1 - i);
// }

// let answer = '';

// while (ten / 8 !== 0) {
//   const t = ten % 8;
//   answer = t + answer;
//   ten = Math.floor(ten / 8);
// }

// console.log(answer);

let answer = '';

function convert8(num) {
  return parseInt(num, 2).toString(8);
}

while (input.length > 3) {
  let splitted = input.slice(input.length - 3, input.length);
  answer = convert8(splitted) + answer;
  input = input.slice(0, input.length - 3);
}

console.log(convert8(input) + answer);

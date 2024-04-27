/**
 * 문제: 주어진 문자열을 순회하며 합을 구하기
 *
 * 풀이과정
 * - 숫자를 모두 합해서 출력
 */

const fs = require('fs');
const [_, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = 0;

for (const string of input) {
  answer += Number(string);
}

console.log(answer);

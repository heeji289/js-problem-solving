/**
 * 10798
 *
 * 1. 가장 긴 문자열에 맞게 다른 문자열 길이 조절 필요
 * 2. 0~n까지 0~m까지 순회하면서 출력하고
 * 3. 빈 문자열 제거
 */
const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const maxLength = Math.max(...input.map((i) => i.length));

let answer = '';

for (let j = 0; j < maxLength; j++) {
  for (let i = 0; i < input.length; i++) {
    answer += input[i][j] ?? '';
  }
}

console.log(answer);

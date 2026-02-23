/**
 * 2870
 *
 * 문자열 순회하면서 아스키코드로 이게 숫자인지 판별하고
 * - 숫자면 temp += 숫자
 * - 아니면 배열에 temp 넣고, temp = ''
 */
const fs = require('fs');
const [_, ...lines] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

let answer = [];

for (const line of lines) {
  let temp = '';

  for (const str of line) {
    const strCode = str.charCodeAt(0);

    if (strCode >= 48 && strCode <= 57) {
      temp += str;
    } else {
      if (temp !== '') {
        answer.push(temp);
        temp = '';
      }
    }
  }

  if (temp !== '') {
    answer.push(temp);
  }
}

// BigInt...
answer = answer.map((v) => BigInt(v)).sort((a, b) => (a < b ? -1 : 1));
console.log(answer.join('\n'));

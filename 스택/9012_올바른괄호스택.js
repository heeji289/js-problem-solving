/**
 * 문제: 주어진 문자열이 올바른 괄호 형식인지
 *
 * 풀이과정
 * - ( 만나면 넣고
 * - ) 만나면 빼고 (뺄 거 없으면 NO임)
 *
 * 핵심개념: 스택
 */
const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

function checkIsVPS(str) {
  const stack = [];

  for (const s of str) {
    if (s === '(') {
      stack.push(s);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

for (const line of input) {
  console.log(checkIsVPS(line) ? 'YES' : 'NO');
}

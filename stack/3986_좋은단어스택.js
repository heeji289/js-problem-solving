/**
 * 문제: 주어진 문자열이 좋은 단어인지 판별
 * 핵심개념: 스택
 *
 * 풀이과정
 * -> 문자열을 순회하면서
 * - stack 맨 위 요소가 현재 문자와 같으면 빼고
 * - 아니면 넣는다.
 * - 최종적으로 stack이 비어있으면 좋은 단어
 */
const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

function checkIsGoodWord(word) {
  const stack = [];

  for (const s of word) {
    const top = stack[stack.length - 1];
    top === s ? stack.pop() : stack.push(s);
  }

  return stack.length === 0;
}

let answer = 0;

for (const line of input) {
  answer += checkIsGoodWord(line) ? 1 : 0;
}

console.log(answer);

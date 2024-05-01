/**
 * 문제: 주어진 후위표기식을 계산해라
 * 핵심개념: 스택
 *
 * 풀이과정
 * 1. 숫자면 스택에 push, 연산자면 스택에서 2번 pop해서 연산하고 다시 push
 * 2. 마지막에 pop해서 출력
 *
 * ABCD를 각 숫자에 매칭하는 법 고민
 * -> charCodeAt으로 아스키코드 구하고 65 (기준점)을 빼서 index 구해줌
 *
 * 둘째자리까지 출력하는 법 조사
 * -> str.toFixed(2)
 */
const fs = require('fs');
const [_, line, ...input] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const operators = ['+', '-', '*', '/'];
const numbers = input.map((v) => Number(v));

const stack = [];

for (const str of line) {
  if (operators.findIndex((v) => v === str) > -1) {
    const b = stack.pop();
    const a = stack.pop();

    switch (str) {
      case '+': {
        stack.push(a + b);
        break;
      }

      case '-': {
        stack.push(a - b);
        break;
      }

      case '*': {
        stack.push(a * b);
        break;
      }

      case '/': {
        stack.push(a / b);
        break;
      }
    }
  } else {
    const index = str.charCodeAt(0) - 65;
    stack.push(numbers[index]);
  }
}

console.log(stack.pop().toFixed(2));

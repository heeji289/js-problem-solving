/**
 * 2504
 */
const fs = require('fs');
const line = fs.readFileSync('example.txt').toString().trim();

function isOpenBracket(string) {
  return ['(', '['].includes(string);
}

function solution(line) {
  const stack = [];

  for (const str of line) {
    if (isOpenBracket(str)) {
      stack.push(str);
    } else {
      // 닫힌 괄호일 때,

      const top = stack.pop();

      // 맨 위의 것이 괄호일 때
      if (isOpenBracket(top)) {
        if ((str === ')' && top === '(') || (str === ']' && top === '[')) {
          let result = '(' === top ? 2 : 3;

          // 현재 제일 위에 있는 것이 숫자이면 pop해서 더해줘
          if (!isOpenBracket(stack[stack.length - 1]) && stack.length > 0) {
            result += stack.pop();
          }

          stack.push(result);
        } else {
          return 0;
        }
      } else {
        // 맨 위의 것이 숫자일 때,
        const s = stack.pop(); // 한 번 더 pop

        // console.log('str:', str, 's:', s);

        if ((str === ')' && s === '(') || (str === ']' && s === '[')) {
          let result = top * ('(' === s ? 2 : 3);

          // console.log(stack);
          if (!isOpenBracket(stack[stack.length - 1]) && stack.length > 0) {
            // console.log('여기?');
            result += stack.pop();
          }

          stack.push(result);
        } else {
          return 0;
        }
      }
    }
  }

  const ans = stack.pop();

  return stack.length > 0 ? 0 : isOpenBracket(ans) ? 0 : ans;
}

console.log(solution(line));

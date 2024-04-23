/**
 * 9996
 *
 * 정규표현식 사용?
 *
 * 살짝 검색
 * -> *이 여러개 존재할 수 있을 줄 알았는데 패턴 당 1개만 있다.
 *
 * 알게된 것
 * substring method
 *
 * 생각 못한 부분
 * : h*n인데 hn이면 단순히 *기준 앞뒤만 비교하면 DA가 나온다.
 * 문자열 길이도 고려해줘야함! 예를 들어 aaa*a, aaa면 안되자너?
 */
const fs = require('fs');
const [count, pattern, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function checkPatterMatched(pattern, str) {
  const [left, right] = pattern.split('*');

  const leftString = str.substring(0, left.length);
  const rightString = str.substring(str.length - right.length);

  if (left.length + right.length > str.length) {
    return false;
  }

  if (leftString === left && rightString === right) {
    return true;
  }

  return false;
}

for (const str of input) {
  const isPatternMathced = checkPatterMatched(pattern, str);

  console.log(isPatternMathced ? 'DA' : 'NE');
}

/**
 * 문제: a*b와 같이 표현되는 패턴이 있다. *에는 어떤 문자든 들어올 수 있다. 단어가 주어졌을 때 패턴에 해당하는지 출력
 *
 * 풀이과정
 * - 처음에는 정규표현식 써야하나 생각함 -> 코테 때 생각하기 힘들 거라 생각
 * - 문제를 잘못 읽음 *이 여러개 존재할 수 있을 줄 알았는데 패턴 당 1개만 있다.
 * - *을 기준으로 패턴을 자르고 문자열도 잘라서 비교하는 방식으로 구현
 *
 * 생각하지 못한 부분
 * - h*n 패턴이 있고 문자가 hn이면 단순히 비교하는 것만으로는 안됨.
 * -> 그래서 길이를 고려해준다.
 */
const fs = require('fs');
const [count, pattern, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function checkPatterMatched(pattern, str) {
  const [left, right] = pattern.split('*');

  // *을 기준으로 자른 두 패턴 left, right 길이만큼 문자를 자른다.
  const leftString = str.substring(0, left.length);
  const rightString = str.substring(str.length - right.length);

  // *을 제외한 패턴의 길이가 문자 길이보다 크면 안되므로 false를 리턴
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

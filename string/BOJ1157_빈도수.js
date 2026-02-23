/**
 * 문제: 주어진 문자열에서 가장 많이 나온 문자를 출력, 여러개면 ?를 출력
 *
 * 풀이과정
 * - 문자열을 순회하면서 빈도수를 체크한다.
 * - 대소문자 구분 없이 해야하므로 upperCase, lowerCase 메서드 활용
 * - freq 객체에 빈도수 체크해서 max, maxKey 찾고 여러개면 물음표 출력
 *
 * 알게된 것
 * - string.toUpperCase()
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const freq = {};

// 대문자로 변환해서 freq객체에 빈도수 체크
for (const str of input) {
  const strKey = str.toUpperCase();

  freq[strKey] = (freq[strKey] ?? 0) + 1;
}

let maxKey = '';
let maxCount = 0;

// freq 객체를 순회하면서 빈도수 높은 문자와 그 빈도수를 구함
for (const [key, value] of Object.entries(freq)) {
  if (maxCount < value) {
    maxKey = key;
    maxCount = value;
  }
}

// freq 객체를 순회하면서 빈도수가 같은 문자열이 있는지 체크
const isMultiMax =
  Object.values(freq).filter((value) => value === maxCount).length > 1;

const answer = isMultiMax ? '?' : maxKey;

console.log(answer);
